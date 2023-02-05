const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { roomHandler } = require("./utils/roomHandler")
const { gameHandler } = require("./utils/gameHandler")

// import express from "express"
// import { createServer }  from "http"
// import { Server } from "socket.io";

// import { roomHandler } from "./utils/roomHandler"
// import { gameHandler } from "./utils/gameHandler"

let app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app = initializeRoutes(app);
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "welcome to the beginning of greatness",
  });
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Socket setup

const onConnection = (socket) => {
    roomHandler(io, socket);
    gameHandler(io, socket);
};

io.on("connection",  onConnection);
// io.on("connection",  onConnection);

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});