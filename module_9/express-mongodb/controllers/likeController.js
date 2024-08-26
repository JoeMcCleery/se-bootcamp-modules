"use strict";

let Models = require("../models"); // matches index.js

const getLikes = (res) => {
  // finds all likes
  Models.Like.find({})
    .populate("userId", "username")
    .populate("postId")
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getLike = (req, res) => {
  // finds the like matching the ID from the param
  Models.Like.findById(req.params.id)
    .populate("userId", "username")
    .populate("postId")
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (data, res) => {
  // creates a new like using JSON data POSTed in request body
  console.log(data);

  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  // updates the like matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);

  Models.Like.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  // deletes the like matching the ID from the param
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  getLike,
  createLike,
  updateLike,
  deleteLike,
};
