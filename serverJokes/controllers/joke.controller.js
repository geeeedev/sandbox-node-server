// load model
const Joke = require("../models/joke.model");

module.exports = {
  getAllJoke(req, res) {
    Joke.find()
      .then((allJokes) => {
        res.json(allJokes);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getOneJoke(req, res) {
    Joke.findById(req.params.id)
      .then((oneJoke) => {
        res.json(oneJoke);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  createJoke(req, res) {
    Joke.create(req.body)
      .then((newJoke) => {
        res.json(newJoke);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateJoke(req, res) {
      Joke.findByIdAndUpdate(req.params.id,req.body,{
          runValidators: true,
          new: true,
      })
      .then((updatedJoke)=>{
          res.json(updatedJoke);
      })
      .catch((err)=>{
          res.json(err);
      });
  },
  removeJoke(req, res) {
      Joke.findByIdAndDelete(req.params.id)
      .then((deletedJoke)=>{
          res.json(deletedJoke);
      })
      .catch((err)=>{
          res.json(err);
      })
  },
};
