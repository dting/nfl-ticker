

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Drive', {
    gsisId: {
      type: DataTypes.STRING(10),
      field: 'gsis_id',
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'game',
        key: 'gsis_id',
      },
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    },
    driveId: {
      type: DataTypes.INTEGER,
      field: 'drive_id',
      allowNull: false,
      primaryKey: true,
    },
    startField: {
      type: DataTypes.STRING,
      field: 'start_field',
      allowNull: true,
    },
    startTime: {
      type: DataTypes.STRING,
      field: 'start_time',
      allowNull: false,
    },
    endField: {
      type: DataTypes.STRING,
      field: 'end_field',
      allowNull: true,
    },
    endTime: {
      type: DataTypes.STRING,
      field: 'end_time',
      allowNull: false,
    },
    posTeam: {
      type: DataTypes.STRING(3),
      field: 'pos_team',
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    posTime: {
      type: DataTypes.STRING,
      field: 'pos_time',
      allowNull: true,
    },
    firstDowns: {
      type: DataTypes.INTEGER,
      field: 'first_downs',
      allowNull: false,
    },
    result: {
      type: DataTypes.TEXT,
      field: 'result',
      allowNull: true,
    },
    penaltyYards: {
      type: DataTypes.INTEGER,
      field: 'penalty_yards',
      allowNull: false,
    },
    yardsGained: {
      type: DataTypes.INTEGER,
      field: 'yards_gained',
      allowNull: false,
    },
    playCount: {
      type: DataTypes.INTEGER,
      field: 'play_count',
      allowNull: false,
    },
    timeInserted: {
      type: DataTypes.DATE,
      field: 'time_inserted',
      allowNull: false,
    },
    timeUpdated: {
      type: DataTypes.DATE,
      field: 'time_updated',
      allowNull: false,
    },
  }, {
    schema: 'public',
    tableName: 'drive',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Drive = model.Drive;
  const AggPlay = model.AggPlay;
  const Play = model.Play;
  const PlayPlayer = model.PlayPlayer;
  const Game = model.Game;
  const Team = model.Team;
  const Player = model.Player;

  Drive.hasMany(AggPlay, {
    as: 'AggPlayGsisIdFkey1s',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.hasMany(Play, {
    as: 'PlayGsisIdFkeys',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.hasMany(PlayPlayer, {
    as: 'PlayPlayerGsisIdFkey1s',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsTo(Game, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsTo(Team, {
    as: 'RelatedPosTeam',
    foreignKey: 'pos_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Drive.belongsToMany(Play, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Game, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Game, {
    as: 'PlayGses',
    through: Play,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Team, {
    as: 'PlayPosTeams',
    through: Play,
    foreignKey: 'gsis_id',
    otherKey: 'pos_team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Play, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Game, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Player, {
    as: 'PlayPlayerPlayers',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'player_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Drive.belongsToMany(Team, {
    as: 'PlayPlayerTeams',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
};
