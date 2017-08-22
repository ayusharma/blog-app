const config = require('./config');
const mongoose = require('mongoose');

module.exports = function () {
  const db = mongoose.connect(config.db, { useMongoClient: true });
  require('../app/models/post.server.models');
  return db;
}
