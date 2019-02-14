const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');


mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
