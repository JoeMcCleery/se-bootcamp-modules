const express = require("express");
require("dotenv").config();
let dbConnect = require("./dbConnect");
var cors = require("cors");

const app = express();

// parse requests of content-type - application / json;
app.use(express.json());

app.use(cors());

// Setup routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);
let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);
let likeRoutes = require("./routes/likeRoutes");
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
