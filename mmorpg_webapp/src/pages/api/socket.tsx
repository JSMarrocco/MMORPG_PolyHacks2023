

import messageHandler from "@/utils/sockets/messageHandler";
import roomHandler from "@/utils/sockets/roomHandler";
import { Server } from "socket.io";


export default function handler(req, res) {

    // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
      messageHandler(io, socket);
      roomHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();

}

