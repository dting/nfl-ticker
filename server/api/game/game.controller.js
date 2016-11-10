const u = require('../../util');
const { Drive, Game, Play, Sequelize } = require('../../db');

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
      include: [{
        model: Play,
        as: 'PlayGsisIdFkeys',
        where: Sequelize.literal('"DriveGsisIdFkeys.PlayGsisIdFkeys"."drive_id" = "DriveGsisIdFkeys"."drive_id"'),
      }],
    }],
    order: [
      [{ model: Drive, as: 'DriveGsisIdFkeys' }, 'drive_id'],
    ],
  })
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

module.exports = controller;
