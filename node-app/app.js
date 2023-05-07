require("dotenv").config();
require("./config/db")();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/waitList");
//middleware
app.use(cors());
app.use(express.json());
app.use(router);
app.get("app is working", (req, res) => {
  res.send("<h1> Hello world </h1>");
});
app.listen(5001, () => {
  console.log("server is listening to port 5001");
});
