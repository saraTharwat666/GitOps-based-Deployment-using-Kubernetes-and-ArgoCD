require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongoDbUrl)
  .then(() => {
    console.log('connected to database');
  })
  .catch(err => {
    console.error('Mongo connection error:', err);
  });
