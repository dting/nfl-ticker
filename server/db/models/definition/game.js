

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Game', {
    gsisId: {
      type: DataTypes.STRING(10),
      field: 'gsis_id',
      allowNull: false,
      primaryKey: true,
    },
    gamekey: {
      type: DataTypes.STRING(5),
      field: 'gamekey',
      allowNull: true,
    },
    startTime: {
      type: DataTypes.DATE,
      field: 'start_time',
      allowNull: false,
    },
    week: {
      type: DataTypes.INTEGER,
      field: 'week',
      allowNull: false,
    },
    dayOfWeek: {
      type: DataTypes.ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      field: 'day_of_week',
      allowNull: false,
    },
    seasonYear: {
      type: DataTypes.INTEGER,
      field: 'season_year',
      allowNull: false,
    },
    seasonType: {
      type: DataTypes.ENUM('Preseason', 'Regular', 'Postseason'),
      field: 'season_type',
      allowNull: false,
    },
    finished: {
      type: DataTypes.BOOLEAN,
      field: 'finished',
      allowNull: false,
    },
    homeTeam: {
      type: DataTypes.STRING(3),
      field: 'home_team',
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    homeScore: {
      type: DataTypes.INTEGER,
      field: 'home_score',
      allowNull: false,
    },
    homeScoreQ1: {
      type: DataTypes.INTEGER,
      field: 'home_score_q1',
      allowNull: true,
    },
    homeScoreQ2: {
      type: DataTypes.INTEGER,
      field: 'home_score_q2',
      allowNull: true,
    },
    homeScoreQ3: {
      type: DataTypes.INTEGER,
      field: 'home_score_q3',
      allowNull: true,
    },
    homeScoreQ4: {
      type: DataTypes.INTEGER,
      field: 'home_score_q4',
      allowNull: true,
    },
    homeScoreQ5: {
      type: DataTypes.INTEGER,
      field: 'home_score_q5',
      allowNull: true,
    },
    homeTurnovers: {
      type: DataTypes.INTEGER,
      field: 'home_turnovers',
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.STRING(3),
      field: 'away_team',
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    awayScore: {
      type: DataTypes.INTEGER,
      field: 'away_score',
      allowNull: false,
    },
    awayScoreQ1: {
      type: DataTypes.INTEGER,
      field: 'away_score_q1',
      allowNull: true,
    },
    awayScoreQ2: {
      type: DataTypes.INTEGER,
      field: 'away_score_q2',
      allowNull: true,
    },
    awayScoreQ3: {
      type: DataTypes.INTEGER,
      field: 'away_score_q3',
      allowNull: true,
    },
    awayScoreQ4: {
      type: DataTypes.INTEGER,
      field: 'away_score_q4',
      allowNull: true,
    },
    awayScoreQ5: {
      type: DataTypes.INTEGER,
      field: 'away_score_q5',
      allowNull: true,
    },
    awayTurnovers: {
      type: DataTypes.INTEGER,
      field: 'away_turnovers',
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
    tableName: 'game',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Game = model.Game;
  const AggPlay = model.AggPlay;
  const Drive = model.Drive;
  const Play = model.Play;
  const PlayPlayer = model.PlayPlayer;
  const Team = model.Team;
  const Player = model.Player;

  Game.hasMany(AggPlay, {
    as: 'AggPlayGsisIdFkey2s',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.hasMany(Drive, {
    as: 'DriveGsisIdFkeys',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.hasMany(Play, {
    as: 'PlayGsisIdFkey1s',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.hasMany(PlayPlayer, {
    as: 'PlayPlayerGsisIdFkey2s',
    foreignKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsTo(Team, {
    as: 'RelatedAwayTeam',
    foreignKey: 'away_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Game.belongsTo(Team, {
    as: 'RelatedHomeTeam',
    foreignKey: 'home_team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Game.belongsToMany(Play, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Drive, {
    as: 'AggPlayGses',
    through: AggPlay,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Team, {
    as: 'DrivePosTeams',
    through: Drive,
    foreignKey: 'gsis_id',
    otherKey: 'pos_team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Drive, {
    as: 'PlayGses',
    through: Play,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Team, {
    as: 'PlayPosTeams',
    through: Play,
    foreignKey: 'gsis_id',
    otherKey: 'pos_team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Play, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Drive, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'gsis_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Player, {
    as: 'PlayPlayerPlayers',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'player_id',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });

  Game.belongsToMany(Team, {
    as: 'PlayPlayerTeams',
    through: PlayPlayer,
    foreignKey: 'gsis_id',
    otherKey: 'team',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });
};
