const mongoose = require("mongoose");

module.exports = (db_name) => {
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((res) => {
      console.log(`Connected to ${db_name}`);
      console.log(`Conn Success Response: `, res);
    })
    .catch((err) => {
      console.log(`Connection to ${db_name} Failed`, err);
    });
};
