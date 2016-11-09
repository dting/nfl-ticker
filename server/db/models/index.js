/* eslint-disable global-require */

const model = {};
let initialized = false;

function init(sequelize) {
  // Destroy itself to prevent repeated calls and clash with a model named 'init'.
  delete module.exports.init;
  initialized = true;
    // Import model files and assign them to `model` object.
  model.AggPlay = sequelize.import('./definition/agg-play.js');
  model.Drive = sequelize.import('./definition/drive.js');
  model.Game = sequelize.import('./definition/game.js');
  model.Metum = sequelize.import('./definition/meta.js');
  model.Play = sequelize.import('./definition/play.js');
  model.Player = sequelize.import('./definition/player.js');
  model.PlayPlayer = sequelize.import('./definition/play-player.js');
  model.Team = sequelize.import('./definition/team.js');

    // All models are initialized. Now connect them with relations.
  require('./definition/agg-play.js').initRelations();
  require('./definition/drive.js').initRelations();
  require('./definition/game.js').initRelations();
  require('./definition/meta.js').initRelations();
  require('./definition/play.js').initRelations();
  require('./definition/player.js').initRelations();
  require('./definition/play-player.js').initRelations();
  require('./definition/team.js').initRelations();
  return model;
}

// Note: While using this module, DO NOT FORGET FIRST CALL model.init(sequelize).
// Otherwise you get undefined.
module.exports = model;
module.exports.init = init;
module.exports.isInitialized = initialized;
