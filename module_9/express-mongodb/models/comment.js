const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  message: { type: String, trim: true, required: true },
});

module.exports = mongoose.model("comment", commentSchema);
