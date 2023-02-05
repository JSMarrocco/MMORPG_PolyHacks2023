let GameData = {}

function gameHandler(io, socket) {
    const initGame = ({roomId}) => {
        console.log("Start Game for room: ", roomId);
        GameData[roomId] = {
            started: false,
            players: [] 
        }
        io.to(roomId).emit("requestPlayerInfo", roomId)
    }

    const receivingPlayerInfo = ({roomId, player}) => {
        console.log("Receiving info for room: ", roomId);
        GameData[roomId].players.push(player)
        if (GameData[roomId].players.length > 1) {
            GameData[roomId].started = true
            io.to(roomId).emit("startGame")
        }
        console.log(GameData[roomId]);
    }

    socket.on("initGame", initGame)
    socket.on("playerInfo", receivingPlayerInfo)


}

module.exports = {gameHandler}