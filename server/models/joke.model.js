// create schema/structure and model, then export
//load mongoose module
const mongoose = require("mongoose");
const errMsgRequired = `{PATH} is required`;
const errMsgMinLen = `{PATH} must be at least {MINLENGTH} characters.`;

//build collection/dataset/table structure
const JokeSchema = mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, errMsgRequired],
      minlength: [10, errMsgMinLen],
    },
    punchline: {
      type: String,
      required: [true, errMsgRequired],
      minlength: [3, errMsgMinLen],
    },
  },
  { timestamps: true }
);

//assemble model Joke with schema
const Joke = mongoose.model("Joke", JokeSchema);


module.exports = Joke;