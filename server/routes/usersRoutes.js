const express = require("express");
const router = express.Router();
require("dotenv").config();
const PORT = process.env.PORT;
const User = require("./../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


const authorize = (req, res, next) => {
  if (req.path === "/user/login" || req.path === "/user/signup") {
    next();
  } else {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Token not found" });
    }
    const authTokenArray = req.headers.authorization.split(" ");
    if (
      authTokenArray[0].toLowerCase() !== "bearer" &&
      authTokenArray.length !== 2
    ) {
      return res.status(401).json({ message: "Invalid token." });
    }

    jwt.verify(authTokenArray[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res
          .status(401)
          .json({ message: "This token is expired or invalid" });
      } else {
        req.tokenData = decoded;
        next();
      }
    });
  }
};

// hash function
const hashPassword = (password) => {
  return bcrypt.hashSync(password, 12);
}

// ------ USER ROUTES -----

// GET a user by ID
router.get("/", authorize, (req, res) => {
  res.json(req.tokenData);
});

// POST a new user signing up
router.post("/signup", async (req, res) => {
  if (req.password !== req.confirm) {
    return res.status(401).json({ message: "Passwords do not match" });
  } else {
    let user = new User({
      username: req.body.username,
      password: req.body.password,
      watchlist: [],
    });
    try {
      // if successful, save user to DB and send the get user by ID route
      user = await user.save();
      res.send("logged in");
    } catch (err) {
      console.error(err);
    }
  }
});

// POST Login request
router.post("/login", async (req, res, next) => {
  const foundUser = await User.findOne({ username: req.body.username }).exec();
  if (!foundUser) {
    return res.status(404).json({ message: `No user found with that username` });
  }

  const matchPasswords = bcrypt.compareSync(req.body.password, foundUser.password);

  if (matchPasswords) {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      `${process.env.JWT_SECRET}`,
      { expiresIn: "30d" }
    );
    return res.json({ token: token, userData: req.tokenData });
  } else {
    return res.status(403).json({ message: "Invalid password" });
  }
});

// ----- WATCHLIST ROUTES -----

// GET user watchlist
router.get("/watchlist", authorize, async (req, res) => {
  const userObject = await User.findOne({ username: req.tokenData.username });
  res.status(200).json(userObject.watchlist);
});

// PUT add to watchlist
router.put("/watchlist", authorize, async (req, res) => {
  const updatedWatchlist = await User.findOneAndUpdate(
    { username: req.tokenData.username },
    {
      $addToSet: {
        watchlist: [
          {
            symbol: req.body.symbol,
            name: req.body.name,
          },
        ],
      },
    }
    );
    const userObject = await User.findOne({ username: req.tokenData.username });
    res.status(200).json(userObject.watchlist);
  });

// DELETE stock from watchlist
router.put("/watchlist/:symbol", authorize, async (req, res) => {
  const updatedWatchlist = await User.updateOne(
    { username: req.tokenData.username },
    {
      $pull: {
        watchlist: {
          symbol: req.body.symbol,
          name: req.body.name
        },
      }
    },
  );
  const userObject = await User.findOne({ username: req.tokenData.username });
  res.status(200).json(userObject.watchlist);
  });

module.exports = router;
