const post = require('../controllers/post.server.controller.js');

module.exports = function (app) {
  app.route('/api/posts')
     .post(post.create);
}
