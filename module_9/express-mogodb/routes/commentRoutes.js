let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all comments
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

// Adds a POST route to create a new comment
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

// Add PUT route to update comment by id
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

// Adds DELETE route to delete comment by id
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
