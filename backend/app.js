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
    name: "Cheeky Child",
    vote: 0,
  },
  {
    name: "Tormented Teenager",
    vote: 0,
  },
  {
    name: "Mad Mid Lifer",
    vote: 0,
  },
  {
    name: "Groovy Grandparent",
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

server.listen(process.env.PORT || 5000, () => {
  console.log("listening on *:3000");
});
