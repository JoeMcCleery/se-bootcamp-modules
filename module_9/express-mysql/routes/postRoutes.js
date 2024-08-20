const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/posts
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// matches POST requests sent to /api/posts/create
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// matches PUT requests to /api/posts/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// matches DELETE requests to /api/posts/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
