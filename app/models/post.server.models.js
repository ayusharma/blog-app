const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  content: {
    type: String,
    default: ''
  }
});

const PostSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  text: [TextSchema]
});

mongoose.model('Post', PostSchema);
