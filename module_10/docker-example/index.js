const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const socketUsers = "users";
const socketChatLog = "log";
const socketChatMessage = "message";
const socketUpdateUser = "update";
const chatLogSize = 1000;

let index = 0;
const users = new Map();
let chatLog = [];

// Connect
io.on("connection", (socket) => {
  // Add user
  const user = {
    id: socket.id,
    username: `User${index++}`,
    typing: false,
  };
  users.set(socket.id, user);
  io.emit(socketUsers, [...users]);
  addToChatLog(socket.id, "~Joined~");

  function addToChatLog(id, msg) {
    const username = users.get(id).username;
    chatLog.push({ username, msg });
    chatLog = chatLog.slice(-chatLogSize);
    socket.broadcast.emit(socketChatLog, chatLog);
  }

  // Send chat log
  socket.emit(socketChatLog, chatLog);

  // Update user
  socket.on(socketUpdateUser, (user) => {
    users.set(user.id, user);
    io.emit(socketUsers, [...users]);
  });

  // Chat message
  socket.on(socketChatMessage, (data) => {
    addToChatLog(data.id, data.msg);
  });

  // Disconnect
  socket.on("disconnect", () => {
    // Remove user
    addToChatLog(socket.id, "~Disconnected~");
    users.delete(socket.id);
    socket.broadcast.emit(socketUsers, [...users]);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
