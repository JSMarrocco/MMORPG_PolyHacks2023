import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import GameComponent from "components/GameComponent";
import { log } from "console";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {v4 as uuidv4} from 'uuid';
import styles from "@/styles/Game.module.css"


let socket

const GameRoomView = () => {
    const router = useRouter()
    const { roomId: queryRoomId } = router.query

    const [userCount, setUserCount] = useState(0);
    const [userId, setUserId] = useState();
    const [roomId, setRoomId] = useState(queryRoomId);
    const [ gameStarted, setGameStarted] = useState(false)

    useEffect(() => {
        socketInitializer();
    }, []);


    const socketInitializer = async () => {
        // await fetch("/api/socket");

        socket = await io('http://localhost:5000');

        socket.on("joinRoomSuccess", (incomingRoomId) => {
            setUserId(socket.id)
        })
        
        socket.on("otherRoomSuccess", (otherId) => {
            setUserCount(userCount+1)
            if (otherId != socket.id) socket.emit("initGame", {roomId})
        })

        socket.on("requestPlayerInfo", () => {
            const player = { 
                id: socket.id
            }
            socket.emit("playerInfo", {roomId, player })
        })


        socket.on('startGame', () => {
            setGameStarted(true)
        })

        socket.emit("onJoinRoom", { roomId} )

    };

    // const onJoinGame = (uid) => {
    //     socket.emit("onJoinRoom", { roomId, uid} )
    // }

    return ( 
        (gameStarted) ?
        <GameComponent/> :
        <Container sx={ { mt:20}}>
            <Box>
                <Grid container spacing={4}  direction="column" justifyContent="center" alignItems="center">
                    {/* <Grid item xs={3}>
                        Room: {roomId}
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => {onJoinGame(userId)}}>Join Game</Button>
                    </Grid>
                    <Grid item xs={3}>
                        Player count: {userCount + 1}
                    </Grid>
                    <Grid item xs={3}>
                        User Id: {userId}
                    </Grid> */}
                    <Grid className={styles.roomTitle} item xs={3}>
                        Room : {roomId}
                    </Grid>
                    <Grid item xs={3}>
                        <CircularProgress />
                    </Grid>
                    <Grid item xs={3}>
                        Waiting for anoter player...
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

// export async function getStaticProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

export default GameRoomView