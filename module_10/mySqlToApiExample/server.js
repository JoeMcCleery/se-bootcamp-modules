require("dotenv").config();

const express = require("express");
let dbConnect = require("./dbConnect");
const app = express();

// parse requests of content-type -application / json;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// ------- USER ROUTES ----------//
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");

setTimeout(() => {
  app.use("/api/users", userRoutes);
  app.use("/api/posts", postRoutes);
}, 10000);

// -----------------------------

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
