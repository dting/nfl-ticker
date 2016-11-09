const express = require('express');

const controller = require('./game.controller');

const game = express.Router();

/**
 * /api/games
 *
 * GET: Get list of all games
 */
game.get('/', controller.index);

/**
 * /api/games/:gsisId
 *
 * GET: Get list of all games
 */
game.get('/:gsisId', controller.detail);

module.exports = game;
