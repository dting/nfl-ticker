const errors = require('../components/errors');

module.exports = function configRoutes(app) {
  app.use('/api/games', require('../api/game')); // eslint-disable-line global-require
  app.use('/api/metas', require('../api/meta')); // eslint-disable-line global-require
  app.use('/api/plays', require('../api/play')); // eslint-disable-line global-require

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|components)/*').get(errors[404]);

  // All other routes should redirect to the index.html
  const indexPath = `${app.get('clientPath')}/index.html`;
  if (app.get('env') === 'development') {
    const { devMiddleware } = require('./webpack'); // eslint-disable-line global-require
    app.use('*', (req, res) => {
      res.set('content-type', 'text/html');
      res.send(devMiddleware.fileSystem.readFileSync(indexPath));
      res.end();
    });
  } else {
    app.route('/*')
      .get((req, res) => res.sendFile(indexPath));
  }
};
