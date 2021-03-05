const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost/Assigment3", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind("connection error"));
  db.once("open", () => {
    console.log("connection Ok");
  });
};


