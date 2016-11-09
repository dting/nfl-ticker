const express = require('express');

const controller = require('./meta.controller');

const meta = express.Router();

/**
 * /api/metas
 *
 * GET: Get meta data for current NFL week and server
 */
meta.get('/', controller.get);

module.exports = meta;
