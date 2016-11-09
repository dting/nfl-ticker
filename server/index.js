/* eslint-disable no-console */
const chalk = require('chalk');
const express = require('express');

const config = require('./config');
const db = require('./db');

const app = express();
config(app);

const startListening = function startListening() {
  app.listen(app.get('port'), app.get('ip'), () => {
    console.info(chalk.cyan(`Listening on port ${app.get('port')}`));
  });
};

db.sequelize.sync()
  .then(() => console.info(chalk.white('\nDB synced...')))
  .then(startListening)
  .catch(console.error);

// http://theholmesoffice.com/mongoose-connection-best-practice/
const shutdown = function shutdown(msg, cb) {
  return function gracefulShutdown() {
    db.sequelize.close(() => {
      console.info(chalk.yellow(`\nDB disconnected through ${msg}`));
      cb();
    });
  };
};

process.once('SIGUSR2', shutdown('Nodemon Restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', shutdown('App Termination', () => process.exit(0)));
process.on('SIGTERM', shutdown('Heroku App Termination', () => process.exit(0)));
