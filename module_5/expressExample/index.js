const express = require("express");
const testRoutes = require("./routes/myTestRoutes");
const calcRoutes = require("./routes/calculatorRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// ADD TO index.js ABOVE ALL app.use CALLS
// parse requests of content-type - application/json
app.use(express.json());

app.use("/", express.static("public"));

app.use("/route", testRoutes);

app.use("/calculator", calcRoutes);

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
