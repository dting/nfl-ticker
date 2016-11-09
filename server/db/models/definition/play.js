

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Play', {
    gsisId: {
      type: DataTypes.STRING(10),
      field: 'gsis_id',
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'drive',
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
      references: {
        model: 'drive',
        key: 'drive_id',
      },
      onUpdate: 'NO ACTION',
      onDelete: 'CASCADE',
    },
    playId: {
      type: DataTypes.INTEGER,
      field: 'play_id',
      allowNull: false,
      primaryKey: true,
    },
    time: {
      type: DataTypes.STRING,
      field: 'time',
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
    yardline: {
      type: DataTypes.STRING,
      field: 'yardline',
      allowNull: true,
    },
    down: {
      type: DataTypes.INTEGER,
      field: 'down',
      allowNull: true,
    },
    yardsToGo: {
      type: DataTypes.INTEGER,
      field: 'yards_to_go',
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description',
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      field: 'note',
      allowNull: true,
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
    firstDown: {
      type: DataTypes.INTEGER,
      field: 'first_down',
      allowNull: false,
    },
    fourthDownAtt: {
      type: DataTypes.INTEGER,
      field: 'fourth_down_att',
      allowNull: false,
    },
    fourthDownConv: {
      type: DataTypes.INTEGER,
      field: 'fourth_down_conv',
      allowNull: false,
    },
    fourthDownFailed: {
      type: DataTypes.INTEGER,
      field: 'fourth_down_failed',
      allowNull: false,
    },
    passingFirstDown: {
      type: DataTypes.INTEGER,
      field: 'passing_first_down',
      allowNull: false,
    },
    penalty: {
      type: DataTypes.INTEGER,
      field: 'penalty',
      allowNull: false,
    },
    penaltyFirstDown: {
      type: DataTypes.INTEGER,
      field: 'penalty_first_down',
      allowNull: false,
    },
    penaltyYds: {
      type: DataTypes.INTEGER,
      field: 'penalty_yds',
      allowNull: false,
    },
    rushingFirstDown: {
      type: DataTypes.INTEGER,
      field: 'rushing_first_down',
      allowNull: false,
    },
    thirdDownAtt: {
      type: DataTypes.INTEGER,
      field: 'third_down_att',
      allowNull: false,
    },
    thirdDownConv: {
      type: DataTypes.INTEGER,
      field: 'third_down_conv',
      allowNull: false,
    },
    thirdDownFailed: {
      type: DataTypes.INTEGER,
      field: 'third_down_failed',
      allowNull: false,
    },
    timeout: {
      type: DataTypes.INTEGER,
      field: 'timeout',
      allowNull: false,
    },
    xpAborted: {
      type: DataTypes.INTEGER,
      field: 'xp_aborted',
      allowNull: false,
    },
  }, {
    schema: 'public',
    tableName: 'play',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Play = model.Play;
  const AggPlay = model.AggPlay;
  const PlayPlayer = model.PlayPlayer;
  const Drive = model.Drive;
  const Game = model.Game;
  const Team = model.Team;
  const Player = model.Player;

  Play.hasMany(AggPlay, {
    as: 'AggPlayGsisIdFkeys',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.hasMany(PlayPlayer, {
    as: 'PlayerGsisIdFkeys',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsTo(Drive, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsTo(Game, {
    as: 'Gsis',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsTo(Team, {
    as: 'RelatedPosTeam',
    foreignKey: 'pos_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Play.belongsToMany(Drive, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsToMany(Game, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsToMany(Drive, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsToMany(Game, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsToMany(Player, {
    as: 'PlayPlayerPlayers',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'player_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Play.belongsToMany(Team, {
    as: 'PlayPlayerTeams',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
};
