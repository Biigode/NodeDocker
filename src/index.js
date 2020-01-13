const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://semana:semana@cluster0-a4th6.mongodb.net/docker?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors());
app.use(express.json());

app.use(routes);
app.listen(3333);
console.log("Container up");
