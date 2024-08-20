"use strict";

// Models
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

// Relations
Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(Post);
Post.hasMany(Comment);

Like.belongsTo(User);
User.hasMany(Like);
Like.belongsTo(Post);
Post.hasMany(Like);

// Sync to database
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
};
