const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/comments
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

// matches POST requests sent to /api/comments/create
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

// matches PUT requests to /api/comments/123 (stores 123 in id param)
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

// matches DELETE requests to /api/comments/123 (123 in id param)
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
