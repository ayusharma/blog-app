const comment = require('../controllers/comment.server.controller.js');

module.exports = function (app) {
  app.route('/api/comment')
     .post(comment.create);

  app.route('/api/comment/:pid')
    .get(comment.find);
};
