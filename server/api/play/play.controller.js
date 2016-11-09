const u = require('../../util');
const { Play, Game } = require('../../db');

const controller = {};

controller.get = function get(req, res) {
  const { notes, seasonYear, seasonType, week } = req.query;
  return Play.findAll({
    where: { note: notes },
    order: [['gsisId', 'DESC'], ['playId', 'DESC']],
    include: [{
      model: Game,
      as: 'Gsis',
      where: {
        seasonYear,
        seasonType,
        week,
      },
    }],
  })
    .then(u.respondWithResult(res))
    .catch(u.handleError(res));
};

module.exports = controller;
