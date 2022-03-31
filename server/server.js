require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');
const User = require('./models/user');
const { db } = require('./models/user');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 8080;

// put in env password
mongoose.connect('mongodb+srv://stonkers_user:uFfdaWY5sYHXb3QR@stonkers.9ivjh.mongodb.net/myFirstDatabase').then(
  //  () => {
  //   console.log('success');
  //   let user = new User({
  //     username: "simon1",
  //     password: 'test1236645',
  //     watchlist: [
  //       {
  //         symbol: "ACN",
  //         name: "Accenture Inc."
  //       }
  //     ]
  //   });
  //   user.save();
  // }, (err) => {
  //   console.log(`${err} failed to connect`);
  // });
)
// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))


const authorize = (req, res, next) => {
  if(req.path === '/user/login' || req.path === '/user/signup') {
    next();
  } else {
    if(!req.headers.authorization) {
      // console.log("something1");
      return res.status(401).json({message: 'Token not found'});
    }
    const authTokenArray = req.headers.authorization.split(' ');
    // console.log(authTokenArray.length);
    if (authTokenArray[0].toLowerCase() !== 'bearer' && authTokenArray.length !== 2) {
      // console.log("something2");
      console.log(req.headers.authorization);
      return res.status(401).json({message: 'Invalid token.'});
    }

    jwt.verify(authTokenArray[1], process.env.JWT_SECRET, (err, decoded) => {
      if(err) {
        console.log(err);
        return res.status(401).json({message: 'This token is expired or invalid'});
      } else {
        req.jwtPayload = decoded;
        console.log(req.jwtPayload);
        next();
      }
    });
  }
}
// insert authorize
app.use(authorize);
app.use('/user', usersRoutes);


app.listen(PORT, ()=> {
  console.log(`🚀Listening on port: ${PORT}`);
});