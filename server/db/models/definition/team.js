

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Team', {
    teamId: {
      type: DataTypes.STRING(3),
      field: 'team_id',
      allowNull: false,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING(50),
      field: 'city',
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      field: 'name',
      allowNull: false,
    },
  }, {
    schema: 'public',
    tableName: 'team',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Team = model.Team;
  const Drive = model.Drive;
  const Game = model.Game;
  const Play = model.Play;
  const Player = model.Player;
  const PlayPlayer = model.PlayPlayer;

  Team.hasMany(Drive, {
    as: 'DrivePosTeamFkeys',
    foreignKey: 'pos_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.hasMany(Game, {
    as: 'GameAwayTeamFkeys',
    foreignKey: 'away_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.hasMany(Game, {
    as: 'GameHomeTeamFkeys',
    foreignKey: 'home_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.hasMany(Play, {
    as: 'PlayPosTeamFkeys',
    foreignKey: 'pos_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.hasMany(Player, {
    as: 'PlayerTeamFkeys',
    foreignKey: 'team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.hasMany(PlayPlayer, {
    as: 'PlayPlayerTeamFkeys',
    foreignKey: 'team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Game, {
    as: 'DriveGses',
    through: Drive,
    foreignKey: 'pos_team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Team, {
    as: 'GameHomeTeams',
    through: Game,
    foreignKey: 'away_team',
    otherKey: 'home_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Team, {
    as: 'GameAwayTeams',
    through: Game,
    foreignKey: 'home_team',
    otherKey: 'away_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Drive, {
    as: 'PlayGses',
    through: Play,
    foreignKey: 'pos_team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Game, {
    as: 'PlayGses',
    through: Play,
    foreignKey: 'pos_team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Play, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Drive, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Game, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'team',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Team.belongsToMany(Player, {
    as: 'PlayPlayerPlayers',
    through: PlayPlayer,
    foreignKey: 'team',
    otherKey: 'player_id',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });
};
