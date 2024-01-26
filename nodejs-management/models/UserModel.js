const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    username: String,
    password: String,
    email: String,
    age: Number,
  }, { timestamps: true});

module.exports = mongoose.model("User", userSchema)
