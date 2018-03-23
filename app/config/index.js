const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./../routes');

/**
 * Instantiate express
 */
const app = express();
const router = express.Router();

/**
 * configure app to use the bodyParser,
 * in order to enhance POST request
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Use express router on our routes
 */
routes(router);

// Register routes
app.use('/api', router);

// expose the server
module.exports = app;
