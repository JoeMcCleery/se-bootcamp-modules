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
  socket.broadcast.emit("connection", { id: socket.id, connected: true });

  // Typing
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  // Chat message
  socket.on("chat message", (data) => {
    socket.broadcast.emit("chat message", data);
  });

  // Disconnect
  socket.on("disconnect", () => {
    socket.broadcast.emit("typing", { id: socket.id, isTyping: false });
    socket.broadcast.emit("connection", { id: socket.id, connected: false });
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
