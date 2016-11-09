module.exports = {
  sequelize: {
    uri: process.env.DATABASE_URL || 'postgres://nfldb:nfldb@localhost:5432/nfldb',
    options: {
      logging: false,
      dialect: 'postgres',
    },
  },
};
