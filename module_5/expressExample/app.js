const express = require("express");
const calcRoutes = require("./routes/calculatorRoutes");

const app = express();

app.use(express.json());
app.use("/", express.static("public"));
app.use("/calculator", calcRoutes);

module.exports = app;
