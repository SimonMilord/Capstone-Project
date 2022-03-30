const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new Schema({
  username: {type: String, unique: false, required: true},
  password: {type: String, unique: false, required: true},
  watchlist: {
    type: [{
      symbol: {type: String, unique: true, required: false},
      name: {type: String, unique: true, required: false}
  }],
  unique: false,
  required: true}
})


// Schema methods
userSchema.methods = {
  confirmPassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
  hashPassword: plainPassword => {
    return bcrypt.hashSync(plainPassword, 12);
  }
};

// compiling user schema into a model
const User = mongoose.model('User', userSchema);

module.exports = User;