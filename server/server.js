const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');
const User = require('./models/user');
const { db } = require('./models/user');
const app = express();
const PORT = process.env.PORT || 8080;

// put in env password
mongoose.connect('mongodb+srv://stonkers_user:uFfdaWY5sYHXb3QR@stonkers.9ivjh.mongodb.net/myFirstDatabase').then(
   () => {
    console.log('success');
    let user = new User({
      username: "simon2",
      password: 'test12345',
      watchlist: [
        {
          symbol: "GOOG",
          name: "Alphabet Inc."
        }
      ]
    });
    user.save();
  }, (err) => {
    console.log(`${err} failed to connect`);
  });

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))


app.use('/user', usersRoutes);

app.listen(PORT, ()=> {
  console.log(`🚀Listening on port: ${PORT}`);
});