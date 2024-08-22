const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Connect
io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("connection", "a user connected");

  // Chat message
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("connection", "user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
