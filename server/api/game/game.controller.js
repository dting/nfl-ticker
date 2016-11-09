const u = require('../../util');
const { Game, Drive } = require('../../db');

const controller = {};

controller.index = function index(req, res) {
  return Game.findAll({ where: req.query })
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

controller.detail = function index(req, res) {
  const { gsisId } = req.params;
  return Game.findById(gsisId, {
    include: [{
      model: Drive,
      as: 'DriveGsisIdFkeys',
    }],
  })
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

module.exports = controller;
