"use strict";

let Models = require("../models"); // matches index.js

const getUsers = (res) => {
  // finds all users
  Models.User.find({}, { username: true, email: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserById = (req, res) => {
  // finds the user matching the ID from the param
  Models.User.findById(req.params.id, { username: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUser = (data, res) => {
  console.log(data);

  // gets a user using JSON data POSTed in request body
  Models.User.findOne(
    {
      username: data.username,
      password: data.password,
    },
    { username: true, email: true }
  )
    .orFail()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);

  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data.publicFields() }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);

  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    projection: { username: true, email: true },
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  // deletes the user matching the ID from the param
  Models.User.findByIdAndDelete(req.params.id, {
    projection: { username: true, email: true },
  })
    .then((data) => res.send({ result: 200, data: data.publicFields() }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  getUserById,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
