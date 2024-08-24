const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, trim: true, required: true, unique: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.publicFields = function () {
  return {
    _id: this._id,
    username: this.username,
    email: this.email,
  };
};

module.exports = mongoose.model("user", userSchema);
