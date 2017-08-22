const mongoose = require('mongoose');
const Post = mongoose.model('Post');


function getErrorMessage (err) {
  if (err.errors) {
    return err;
  }
  return 'Unknown Server Error';
}

exports.create = function(req, res) {
  const post = new Post(req.body);

  post.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(post);
    }
  });
};
