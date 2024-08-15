let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});

// Adds a GET route to return post by id
router.get("/:id", (req, res) => {
  Controllers.likeController.getLike(req, res);
});

// Adds a POST route to create a new post
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

// Add PUT route to update post by id
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

// Adds DELETE route to delete post by id
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
