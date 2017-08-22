const post = require('../controllers/post.server.controller.js');

module.exports = function (app) {
  app.route('/api/posts')
     .get(post.list)
     .post(post.split, post.create);
}
