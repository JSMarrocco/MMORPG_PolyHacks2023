

function roomHandler (io, socket) {
    const joinRoom = ({roomId}) => {
        const numberOfPlayer  =  (io.sockets.adapter.rooms.get(roomId)) ? io.sockets.adapter.rooms.get(roomId).size : 0
        if (numberOfPlayer < 2) {
            console.log( socket.rooms.has(roomId))
            if (!socket.rooms.has(roomId)) {
                console.log(`User : ${socket.id} join the room ${roomId}`)      
                socket.join(roomId)
                io.to(socket.id).emit("joinRoomSuccess", roomId)
                socket.to(roomId).emit("otherRoomSuccess", socket.id)
            }
        }
    }

    const sendMessage = ({author, msg, roomId}) => {
        socket.to(roomId).emit("addMessage", {author, msg})
    }

    socket.on("onJoinRoom", joinRoom)
    socket.on("sendMessage", sendMessage)
}
 
module.exports = {roomHandler}