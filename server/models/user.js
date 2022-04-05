const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true },
  watchlist: {
    type: [
      {
        _id: false,
        symbol: { type: String, unique: false, required: false },
        name: { type: String, unique: false, required: false },
      },
    ],
    unique: false,
    required: true,
  },
});

// Schema methods
userSchema.methods = {
  confirmPassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
  hashPassword: (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 12);
  },
};

userSchema.pre("save", function (next) {
  if (!this.password) {
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

// compiling user schema into a model
const User = mongoose.model("User", userSchema);
module.exports = User;
