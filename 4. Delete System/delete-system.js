const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  deleted: {
    type: Boolean,
    default: false
  }
});

// Soft delete
postSchema.methods.softDelete = function () {
  this.deleted = true;
  return this.save();
};

// Automatically filter deleted data
postSchema.pre(/^find/, function (next) {
  this.where({ deleted: false });
  next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;