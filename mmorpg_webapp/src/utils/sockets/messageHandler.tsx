export default (io, socket) => {
    const createdMessage = (msg) => {
        console.log(msg)
        socket.emit("newIncomingMessage", msg);
    };
  
    socket.on("createdMessage", createdMessage);
  };