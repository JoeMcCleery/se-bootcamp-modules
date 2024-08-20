require("dotenv").config();

const express = require("express");
let dbConnect = require("./dbConnect");
const app = express();

// parse requests of content-type -application / json;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to mySql to express application." });
});

let routes = require("./routes");
app.use("/api/users", routes.userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
