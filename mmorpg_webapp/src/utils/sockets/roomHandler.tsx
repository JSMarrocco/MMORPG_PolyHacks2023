export default (io, socket) => {
    const createRoomWithLink = ({roomId}) => {
        console.log("createRoomWithLink: ", roomId)
        socket.join(roomId)
        socket.to(roomId).emit("joinRoomSuccess", roomId)
    }

    socket.on("createRoom", createRoomWithLink)

}