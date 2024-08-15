let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// Adds a GET route to return post by id
router.get("/:id", (req, res) => {
  Controllers.postController.getPost(req, res);
});

// Adds a POST route to create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Add PUT route to update post by id
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// Adds DELETE route to delete post by id
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
