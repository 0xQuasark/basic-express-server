'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js')
const handlePerson =  require('./handlePerson.js');
const errorHandler = require('./error-handlers/errorHandler');

app.use(logger); // logger middleware
app.use(validator); // validator middleware

app.get('/person', handlePerson)
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running!' + port);
    });
  }
};
