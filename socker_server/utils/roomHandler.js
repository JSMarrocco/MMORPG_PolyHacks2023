

function roomHandler (io, socket) {
    const joinRoom = ({roomId, userId}) => {
        console.log(`User : ${socket.id} join the room ${roomId}`)
        socket.join(roomId)
        io.to(socket.id).emit("joinRoomSuccess", roomId)
        socket.to(roomId).emit("otherRoomSuccess", socket.id)
    }

    socket.on("onJoinRoom", joinRoom)
}
 
module.exports = {roomHandler}