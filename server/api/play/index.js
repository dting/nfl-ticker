const express = require('express');

const controller = require('./play.controller');

const play = express.Router();

/**
 * /api/plays
 *
 * GET: Get list of all plays
 */
play.get('/', controller.get);

module.exports = play;
