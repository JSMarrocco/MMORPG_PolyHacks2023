
const { questionquery } = require('./rpg/derivatives')
const { tolatex } = require('./rpg/latexconverting')
const { answerverify } = require('./rpg/answerchecking')

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
            io.to(roomId).emit("playersInfo", {players: GameData[roomId].players})
            io.to(roomId).emit("startGame")

            GameData[roomId].questions.push(getQuestion())
            io.to(roomId).emit("firstQuestion", {qts: GameData[roomId].questions[GameData[roomId].questions.length - 1].latex})
        }
        console.log(GameData[roomId]);
    }

    const submitAnswer = ({roomId, answer}) => {
        raw = GameData[roomId].questions[GameData[roomId].questions.length - 1].raw
        answerverify(raw, answer).then(res => {
            console.log("ANSWER: ", res);
            let isGameOver = false
           if (res == 1) {
               GameData[roomId].players.forEach(player => {
                   if (player.id == socket.id) {
                        if (player.health < 5) {
                            player.health += 1
                        }
                        io.to(socket.id).emit("updateHealth", {point: player.health})
                       socket.to(roomId).emit("updateOtherHealth", {point: player.health})
                    } 
                    else {
                        player.health -= 1
                        socket.to(roomId).emit("updateHealth", {point: player.health})
                        io.to(socket.id).emit("updateOtherHealth", {point: player.health})
                    }

                    if (player.health <= 0) isGameOver = true
                });
           }
           else {
                GameData[roomId].players.forEach(player => {
                    if (player.id == socket.id) {
                        player.health -= 2
                        io.to(socket.id).emit("updateHealth", {point: player.health})
                        socket.to(roomId).emit("updateOtherHealth", {point:  player.health})
                    } 

                    if (player.health <= 0) isGameOver = true
                });
           }

        //    console.log(GameData[roomId]);

           if(isGameOver) {
                io.to(roomId).emit("gameOver")
           } else {
               GameData[roomId].questions.push(getQuestion())
               io.to(roomId).emit("emitQuestion", {qts: GameData[roomId].questions[GameData[roomId].questions.length - 1].latex})
           }


        })
    }

    socket.on("initGame", initGame)
    socket.on("playerInfo", receivingPlayerInfo)
    socket.on("submitAnswer", submitAnswer)

}

module.exports = {gameHandler}