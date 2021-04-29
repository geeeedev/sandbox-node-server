const mongoose = require("mongoose");

module.exports = (dbName) => {
  mongoose
    .connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((res) => {
      console.log(`Connected to ${dbName}`);
    })
    .catch((err) => {
      console.log(`Connection to ${dbName} failed`, err);
    });
};
