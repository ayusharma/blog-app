const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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
  text: {
    type: String,
    default: '',
    trim: true
  }
});


mongoose.model('Post', PostSchema);
