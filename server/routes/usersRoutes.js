const express = require("express");
const router = express.Router();
require("dotenv").config();
const PORT = process.env.PORT;
const User = require('./../models/user');
const jwt = require("jsonwebtoken");

// ------ USER ROUTES -----
// GET a user by ID
router.get("/", (req, res) => {
  // const targetUser = User.findOne({id: req.params.id}); // not sure
  (user, res) => {
    res.json({

    });
  }
})

// POST a new user signing up
router.post('/signup', async (req, res) => {
  if (req.password !== req.confirm) {
    console.log("user not created");
    return res.status(401).json({message: "Passwords do not match"});
  } else {
    console.log("new user created");
    let user = new User({
      username: req.body.username,
      password: req.body.password,
      watchlist: [{
        symbol: "",
        name: "",
      }]
    })
    try {
      // if successful, save user to DB and send the get user by ID route
     user = await user.save();
     res.redirect(`/`);
    } catch (err) {
      console.error(err);
    }
  }
})


// POST Login request
router.post('/login',async(req, res, next) => {
  const foundUser = await User.findOne({username: req.body.username}).exec();
  if (!foundUser) {
    return res.status(403).json({message: "No such user."});
  }

  if (foundUser.password === req.body.password) {
    const token = jwt.sign({
      username: foundUser.username,
     }, `${process.env.JWT_SECRET}`, {expiresIn: '30d'});
     return res.json({token: token});
// need to put token in header
  } else {
    return res.status(403).json({message: 'Invalid username or password.'});
  }
});

// POST signout request
router.post('/signout', (req, res) => {
  if (req.user) {
    // logout here
    //something
    res.json({message: 'Signing out'});
  } else {
    res.json({message: 'Did not find any user to sign out'});
  }
});

// ----- WATCHLIST ROUTES -----

// POST add to watchlist
router.post('/:id/watchlist', (req, res) => {
  res.json({
    // send watchlist from DB
  });
});

// DELETE stock from watchlist
router.delete('/:id/watchlist/:symbol', (req, res) => {

});

// when login implemented: "/watchlist"
module.exports = router;