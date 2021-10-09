const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("Realtime voting application");
});

let selections = [
  {
    name: "Windows",
    vote: 0,
  },
  {
    name: "MacOS",
    vote: 0,
  },
  {
    name: "A Linux Distro",
    vote: 0,
  },
  {
    name: "Something Else",
    vote: 0,
  },
];

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.emit("new-vote", selections);

  socket.on("new-vote", (vote) => {
    console.log("new-vote:", vote);
    io.emit("new-vote", vote);
    selections = vote;
  });

  socket.on("disconnect", () => console.log("A user disconnected"));
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
