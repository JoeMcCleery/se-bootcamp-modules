const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, trim: true, required: true, unique: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
