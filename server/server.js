require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/usersRoutes");
const User = require("./models/user");
const { db } = require("./models/user");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 8080;
app.use(cors());

// put in env password
mongoose
  .connect(
    "mongodb+srv://stonkers_user:uFfdaWY5sYHXb3QR@stonkers.9ivjh.mongodb.net/myFirstDatabase"
  )
  .then();
// middleware
app.use(express.json());
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use("/user", usersRoutes);

app.listen(PORT, () => {
  console.log(`🚀Listening on port: ${PORT}`);
});
