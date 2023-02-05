
const { questionquery } = require('./rpg/derivatives')
const { tolatex } = require('./rpg/latexconverting')

let GameData = {}


const getQuestion=() => {
    raw = questionquery()
    latex = tolatex(raw)

    return {raw, latex}
}

function gameHandler(io, socket) {
    const initGame = ({roomId}) => {
        console.log("Start Game for room: ", roomId);
        GameData[roomId] = {
            started: false,
            players: [] ,
            questions: []
        }
        io.to(roomId).emit("requestPlayerInfo", roomId)
    }

    const receivingPlayerInfo = ({roomId, player}) => {
        console.log("Receiving info for room: ", roomId);
        GameData[roomId].players.push(player)
        if (GameData[roomId].players.length > 1) {
            GameData[roomId].started = true
            io.to(roomId).emit("startGame")


            GameData[roomId].questions.push(getQuestion())
            io.to(roomId).emit("emitQuestion", {qts: GameData[roomId].questions[GameData[roomId].questions.length - 1].latex})
        }
        console.log(GameData[roomId]);
    }

    socket.on("initGame", initGame)
    socket.on("playerInfo", receivingPlayerInfo)

}

module.exports = {gameHandler}