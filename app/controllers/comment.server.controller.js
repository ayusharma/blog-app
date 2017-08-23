const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');


function getErrorMessage(err) {
  if (err.errors) {
    return err;
  }
  return 'Unknown Server Error';
}

exports.create = function (req, res) {
  const comment = new Comment(req.body);

  comment.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    return res.status(200).json(comment);
  });
};


exports.find = function (req, res) {
  Comment.find({
    paragraphId: req.params.pid
  }).sort('-created').exec((err, comments) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    return res.status(200).json(comments);
  });
};
