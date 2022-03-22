const express = require('express');
require('dotenv').config();
const cors = require('cors');
/*
const jwt = require('jsonwebtoken');
*/
const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, ()=> {
  console.log(`Listening on port: ${PORT}`);
});