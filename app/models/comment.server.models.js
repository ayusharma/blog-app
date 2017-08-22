const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: '',
    require: 'Comment content required.'
  },
  paragraphId: {
    type: Schema.Types.ObjectId,
    require: 'Paragraph id is required.'
  }
});

mongoose.model('Comment', CommentSchema);
