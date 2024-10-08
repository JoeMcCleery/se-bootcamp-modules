require("dotenv").config();

const express = require("express");
let dbConnect = require("./dbConnect");
let cors = require("cors");
const app = express();

// parse requests of content-type -application / json;

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to mySql to express application." });
});

let routes = require("./routes");
app.use("/api/users", routes.userRoutes);
app.use("/api/comments", routes.commentRoutes);
app.use("/api/posts", routes.postRoutes);
app.use("/api/likes", routes.likeRoutes);
app.use("/api/translate", routes.translationRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
