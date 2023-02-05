let GameData = {}

function gameHandler(io, socket) {
    const initGame = ({roomId}) => {
        console.log("Start Game for room: ", roomId);
        GameData[roomId] = {
            players: [] 
        }
        io.to(roomId).emit("requestPlayerInfo", roomId)
    }

    const receivingPlayerInfo = ({roomId, player}) => {
        console.log("Receiving info for room: ", roomId);
        GameData[roomId].players.push(player)
    }

    socket.on("initGame", initGame)
    socket.on("playerInfo", receivingPlayerInfo)


}

module.exports = {gameHandler}