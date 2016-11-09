const u = require('../../util');
const { Metum } = require('../../db');

const controller = {};

controller.get = function get(req, res) {
  return Metum.findOne()
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

module.exports = controller;
