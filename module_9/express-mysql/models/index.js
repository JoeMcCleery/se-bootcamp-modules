"use strict";

// Models
const User = require("./user");
const Post = require("./post");

// Sync to database
async function init() {
  await User.sync();
  await Post.sync();
}

init();

// Relations
Post.belongsTo(User);
User.hasMany(Post);

module.exports = {
  User,
  Post,
};
