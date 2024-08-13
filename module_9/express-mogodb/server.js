const express = require("express");
require("dotenv").config();
let dbConnect = require("./dbConnect");

const app = express();

// parse requests of content-type - application / json;
app.use(express.json());

// Setup routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
