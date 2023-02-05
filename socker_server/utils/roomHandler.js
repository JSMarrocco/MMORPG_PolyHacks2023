

function roomHandler (io, socket) {
    const joinRoom = ({roomId}) => {
        const numberOfPlayer  =  (io.sockets.adapter.rooms.get(roomId)) ? io.sockets.adapter.rooms.get(roomId).size : 0
        if (numberOfPlayer < 2) {
            console.log(`User : ${socket.id} join the room ${roomId}`)
            socket.join(roomId)
            io.to(socket.id).emit("joinRoomSuccess", roomId)
            socket.to(roomId).emit("otherRoomSuccess", socket.id)
        }
    }

    socket.on("onJoinRoom", joinRoom)
}
 
module.exports = {roomHandler}