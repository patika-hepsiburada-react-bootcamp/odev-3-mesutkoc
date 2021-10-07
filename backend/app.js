const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("Realtime voting application");
});

// let totalVotes = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  // socket.emit("new-vote", totalVotes);

  socket.on("new-vote", (vote) => {
    console.log("new-vote:", vote);

    io.emit("new-vote", vote);
    // totalVotes == vote;
  });

  socket.on("disconnect", () => console.log("A user disconnected"));
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
