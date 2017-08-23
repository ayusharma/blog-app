const mongoose = require('mongoose');
const Post = mongoose.model('Post');


function getErrorMessage(err) {
  if (err.errors) {
    return err;
  }
  return 'Unknown Server Error';
}

exports.create = function (req, res) {
  const post = new Post(req.body);

  post.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    return res.status(200).json(post);
  });
};


exports.split = function (req, res, next) {
  const newContent = req.body.text.split('\n\n').reduce((result, value) => {
    let obj = {};
    obj.content = value;
    result.push(obj);
    return result;
  }, []);

  req.body.text = newContent;
  next();
};

exports.list = function (req, res) {
  let query;
  const pageNumber = req.params.pageNumber;

  if (pageNumber) {
    const skip = 5 * (pageNumber - 1);
    query = Post.find().sort('-created').limit(5).skip(skip);
  } else {
    query = Post.find().sort('-created').limit(5);
  }

  query.exec((err, posts) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    return res.status(200).json(posts);
  });
};

exports.blog = function (req, res) {
  Post.find({
    _id: req.params.id
  }).exec((err, blog) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    }
    return res.status(200).json(blog);
  });
};
