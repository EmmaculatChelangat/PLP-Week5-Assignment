const express = require('express');
const db = require('./models');

const app = express();

// Middleware and routes

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
