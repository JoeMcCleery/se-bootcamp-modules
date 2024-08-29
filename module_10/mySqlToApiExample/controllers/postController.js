"use strict";

const Models = require("../models");

// find all posts in DB for all users
const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// create post for specific user id
const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// update likes for specific post id

module.exports = {
  getPosts,
  createPost,
};
