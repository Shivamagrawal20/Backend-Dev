const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  lastLogin: Date,
  lastLogout: Date,
  lastActive: Date
});

// Track login
userSchema.pre('save', function (next) {
  if (this.isNew) {
    this.lastLogin = new Date();
  }
  this.lastActive = new Date();
  next();
});

// Track updates (activity)
userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ lastActive: new Date() });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;