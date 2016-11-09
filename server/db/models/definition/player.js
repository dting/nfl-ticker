

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Player', {
    playerId: {
      type: DataTypes.STRING(10),
      field: 'player_id',
      allowNull: false,
      primaryKey: true,
    },
    gsisName: {
      type: DataTypes.STRING(75),
      field: 'gsis_name',
      allowNull: true,
    },
    fullName: {
      type: DataTypes.STRING(100),
      field: 'full_name',
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING(100),
      field: 'first_name',
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(100),
      field: 'last_name',
      allowNull: true,
    },
    team: {
      type: DataTypes.STRING(3),
      field: 'team',
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    position: {
      type: DataTypes.ENUM('C', 'CB', 'DB', 'DE', 'DL', 'DT', 'FB', 'FS', 'G', 'ILB', 'K', 'LB', 'LS', 'MLB', 'NT', 'OG', 'OL', 'OLB', 'OT', 'P', 'QB', 'RB', 'SAF', 'SS', 'T', 'TE', 'WR', 'UNK'),
      field: 'position',
      allowNull: false,
    },
    profileId: {
      type: DataTypes.INTEGER,
      field: 'profile_id',
      allowNull: true,
    },
    profileUrl: {
      type: DataTypes.STRING(255),
      field: 'profile_url',
      allowNull: true,
    },
    uniformNumber: {
      type: DataTypes.INTEGER,
      field: 'uniform_number',
      allowNull: true,
    },
    birthdate: {
      type: DataTypes.STRING(75),
      field: 'birthdate',
      allowNull: true,
    },
    college: {
      type: DataTypes.STRING(255),
      field: 'college',
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      field: 'height',
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      field: 'weight',
      allowNull: true,
    },
    yearsPro: {
      type: DataTypes.INTEGER,
      field: 'years_pro',
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('Active', 'InjuredReserve', 'NonFootballInjury', 'Suspended', 'PUP', 'UnsignedDraftPick', 'Exempt', 'Unknown'),
      field: 'status',
      allowNull: false,
    },
  }, {
    schema: 'public',
    tableName: 'player',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Player = model.Player;
  const PlayPlayer = model.PlayPlayer;
  const Team = model.Team;
  const Play = model.Play;
  const Drive = model.Drive;
  const Game = model.Game;

  Player.hasMany(PlayPlayer, {
    as: 'PlayPlayerPlayerIdFkeys',
    foreignKey: 'player_id',
    onDelete: 'RESTRICT',
    onUpdate: 'NO ACTION',
  });

  Player.belongsTo(Team, {
    as: 'RelatedTeam',
    foreignKey: 'team',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  });

  Player.belongsToMany(Play, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'player_id',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'NO ACTION',
  });

  Player.belongsToMany(Drive, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'player_id',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'NO ACTION',
  });

  Player.belongsToMany(Game, {
    as: 'PlayPlayerGses',
    through: PlayPlayer,
    foreignKey: 'player_id',
    otherKey: 'gsis_id',
    onDelete: 'RESTRICT',
    onUpdate: 'NO ACTION',
  });

  Player.belongsToMany(Team, {
    as: 'PlayPlayerTeams',
    through: PlayPlayer,
    foreignKey: 'player_id',
    otherKey: 'team',
    onDelete: 'RESTRICT',
    onUpdate: 'NO ACTION',
  });
};
