let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a GET route to return one user
router.get("/:id", (req, res) => {
  Controllers.userController.getUserById(req, res);
});

// Adds a POST route to return user by username and password
router.post("/", (req, res) => {
  Controllers.userController.getUser(req.body, res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// Add PUT route to update user by id
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// Adds DELETE route to delete user by id
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
