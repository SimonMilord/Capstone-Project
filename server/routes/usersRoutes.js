const express = require("express");
const router = express.Router();
const fs = require("fs");
const PORT = process.env.PORT;
const User = require('./../models/user');

// ------ USER ROUTES -----
// GET a user by ID
router.get("/:id", (req, res) => {
  const targetUser = User.findOne({id: req.params.id}); // not sure
})

// POST a new user signing up
router.post('/signup', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    watchlist: []
  })
  try {
    // if successful, save user to DB and send the get user by ID route
   user = await user.save();
   res.redirect(`/user/${user.id}`);
  } catch (err) {
    console.error(err);
  }
})


// POST Login request
router.post('/login', (req, res, next) => {

})

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
router.post('/', (req, res) => {

});

// DELETE stock from watchlist
router.delete('/watchlist', (req, res) => {

});

module.exports = router;