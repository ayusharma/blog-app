const express = require('express');
const morgan = require('morgan');
const comrepss = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = function () {
  const app = express();

  // logging
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(comrepss());
  }

  // request parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Extended methods PUT, DELETE
  app.use(methodOverride());

  require('../app/routes/post.server.route.js')(app);
  require('../app/routes/comment.server.route.js')(app);

  // Static server
  // Note how the express.static() middleware is placed below the call for the
  // routing file. This order matters because if it were above it, Express would
  // first try to look for HTTP request paths in the static files folder.
  // This would make the response a lot slower as it would have to wait for a
  // filesystem I/O operation.
  app.use(express.static('./public'));
  return app;
};
