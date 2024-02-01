const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    username: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    age: {
      type: Number,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
  }, { timestamps: true});

module.exports = mongoose.model("User", userSchema)
