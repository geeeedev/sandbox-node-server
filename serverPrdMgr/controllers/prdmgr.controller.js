// const PrdMgr = require("../models/prdmgr.model");
const PrdMgrModel = require("../models/prdmgr.model");

//controller house an object of various functions
module.exports = {
  create(req, res) {
    PrdMgrModel.create(req.body)
      .then((newPrd) => {
        res.json(newPrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //once req is received, this req will go talk to db to find/get all data.
  //when good, it will bring back an obj of allPrds data
  //which will be returned in an object in json format
  getAll(req, res) {
    PrdMgrModel.find()
      .then((allPrds) => {
        res.json(allPrds);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  getOne(req, res) {
    PrdMgrModel.findById(req.params.id)
      .then((onePrd) => {
        res.json(onePrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  update(req, res) {
    PrdMgrModel.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedPrd) => {
        //updated, got the updated data back
        res.json(updatedPrd); //return it as an obj with its data in json
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  remove(req, res) {
    PrdMgrModel.findByIdAndDelete(req.params.id)
      .then((deletedPrd) => {
        res.json(deletedPrd);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
