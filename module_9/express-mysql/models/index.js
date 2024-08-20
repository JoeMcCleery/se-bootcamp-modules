"use strict";

// Models
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Relations
Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(Post);
Post.hasMany(Comment);

// Sync to database
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
}

init();

module.exports = {
  User,
  Post,
};
