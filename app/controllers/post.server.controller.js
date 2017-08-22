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


exports.split = function (req, res, next) {
  const newContent = req.body.text.split('\n\n').reduce((result, value)=> {
    let obj = {};
    obj.comment = [];
    obj.content = value,
    result.push(obj);
    return result
  }, []);

  req.body.text = newContent;
  console.log(req);
  next();
}

exports.list = function(req, res) {
  Post.find().sort('-created').exec((err, posts) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(posts);
    }
  });
}
