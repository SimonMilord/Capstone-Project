const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');
const app = express();
const PORT = process.env.PORT || 8080;


mongoose.connect('mongodb://localhost:8080/stonkers');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))


app.use('/user', usersRoutes);

app.listen(PORT, ()=> {
  console.log(`🚀Listening on port: ${PORT}`);
});