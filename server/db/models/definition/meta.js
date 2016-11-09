

module.exports = function config(sequelize, DataTypes) {
  return sequelize.define('Metum', {
    version: {
      type: DataTypes.INTEGER,
      field: 'version',
      allowNull: true,
    },
    lastRosterDownload: {
      type: DataTypes.DATE,
      field: 'last_roster_download',
      allowNull: false,
    },
    seasonType: {
      type: DataTypes.ENUM('Preseason', 'Regular', 'Postseason'),
      field: 'season_type',
      allowNull: true,
    },
    seasonYear: {
      type: DataTypes.INTEGER,
      field: 'season_year',
      allowNull: true,
    },
    week: {
      type: DataTypes.INTEGER,
      field: 'week',
      allowNull: true,
    },
  }, {
    schema: 'public',
    tableName: 'meta',
    timestamps: false,
  });
};

module.exports.initRelations = function initRelations() {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
  const model = require('../index'); // eslint-disable-line global-require
  const Metum = model.Metum;
  Metum.removeAttribute('id');
};
