"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); // require the model

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  // also sync any extra models here
}

init();

Post.belongsTo(User, { foreignKey: "userId" }); // set up the relationship
User.hasMany(Post, { foreignKey: "userId" }); // set up the relationship

module.exports = {
  User, // export the model
  Post,
  // also export any extra models here
};
