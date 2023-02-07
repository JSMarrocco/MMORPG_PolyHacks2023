import { Avatar, Box, Button, Card, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, TextField, Typography } from "@mui/material";
import GameComponent from "components/GameComponent";
import { log } from "console";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import {v4 as uuidv4} from 'uuid';
import styles from "@/styles/Game.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import eLeetMath from '../../../../public/eLeetMath.svg'
import Image from "next/image";
import SendIcon from '@mui/icons-material/Send';

var Latex = require('react-latex');

type Message = {
    author: string;
    message: string;
  };

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    // '& .MuiRating-iconHover': {
    //     color: '#ff3d47',
    // },
});

let socket

const GameRoomView = () => {
    const router = useRouter()
    const { name, roomId: queryRoomId } = router.query

    const [userCount, setUserCount] = useState(0);
    const [userId, setUserId] = useState();
    const [userHealth, setUserHealth] = useState(5);
    const [otherHealth, setOtherHealth] = useState(5);

    const [userName, setUserName] = useState(name)
    const [otherName, setOtherName] = useState(name)


    const [roomId, setRoomId] = useState(queryRoomId);
    const [ gameStarted, setGameStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState("Waiting for question")

    const [openDialogue, setOpenDialogue] = useState(false);

    const [messages, setMessages] = useState<Array<Message>>([]);

    const answerRef = useRef();
    const chatRef = useRef();

    const handleClickOpenDialogue = () => {
        setOpenDialogue(true);
      };
    
    const handleCloseDialogue = () => {
        setOpenDialogue(false);

        router.push('/')
    };



    
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
                id: socket.id,
                name: userName,
                health: userHealth
            }
            socket.emit("playerInfo", {roomId, player })
        })

        socket.on("playersInfo", ({players}) => {
            console.log(players)
            players.forEach(player => {
                if (player.id != socket.id)
                    setOtherName(player.name)
            });
        })


        socket.on('startGame', () => {
            setGameStarted(true)
        })

        
        socket.on('firstQuestion', ({qts}) => {
            console.log('FIRST')
            setCurrentQuestion(qts)
        })

        socket.on('emitQuestion', ({qts}) => {
            console.log('EMITQTS')
            setCurrentQuestion(qts)
        })

        socket.on('updateHealth', ({point}) => {
            console.log("UPDATE POINT: ", point)
            setUserHealth(point)
        })

        socket.on('updateOtherHealth', ({point}) => {
            setOtherHealth(point)
        })

        socket.on('gameOver', () =>{
            handleClickOpenDialogue()
        })

        
        socket.on('addMessage', ({author, msg}) =>{
            setMessages((currentMsg) => [
                { author: author, message: msg },
                ...currentMsg,
            ]); 
        })


        socket.emit("onJoinRoom", { roomId} )

    };

    const onSubmitAnswer = (answer) => {
        socket.emit("submitAnswer", { roomId, answer} )
    }

    const handleKeypress = async (e: { keyCode: number; }) => {

        if (e.keyCode == 13) {

            onSubmitAnswer(answerRef.current.value)
            
            answerRef.current.value = "";

        }
    }

    const handleKeypressForChat = (e) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
          if (chatRef.current.value) {
            setMessages((currentMsg) => [
                { author: userName, message: chatRef.current.value },
                ...currentMsg,
            ]);
            socket.emit("sendMessage", {author: userName, msg: chatRef.current.value, roomId})
            chatRef.current.value = ""
          }
        }
      };

    const GameContainer = (question, health, otherHealth) => {
        return( <Container >
        
            <Box sx={{ flexGrow: 1 }}>
                <Grid className={styles.main} container spacing={1}>

                    <Grid xs={12}><br></br></Grid>
                    <Grid className={styles.score} xs={4}>

                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={2}>
                                    <Typography fontWeight={700}>{userName}</Typography>
                                    <StyledRating
                                        name="customized-color"
                                        // defaultValue={health}
                                        value={health}
                                        // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={1}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                {/* {health} */}
                                </Stack>
                                {/* <Typography fontWeight={700}>Elo: 400</Typography> */}
                            </Box>
                        </Card>

                    </Grid>
                    <Grid container  xs = {4} sx={{ mt: 0, mb: 3 }} spacing={0} justifyContent="center" alignItems="center">
                        <Image className = {styles.imagehover} src={eLeetMath} height={80} width={80} alt="eleetmath" onClick={handleCloseDialogue}/>
        
                    </Grid>
                    
                    <Grid xs={0.1}>
                    </Grid>


                    {/* Player 2 stats */}
                    <Grid className={styles.score} xs={3.9}>
                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={2}>
                                    <Typography fontWeight={700}>{otherName}</Typography>
                                    <StyledRating
                                        name="customized-color"
                                        // defaultValue={otherHealth}
                                        value={otherHealth}
                                        // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={1}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    {/* {otherHealth} */}

                                </Stack>
                                {/* <Typography fontWeight={200}>400</Typography> */}
                            </Box>
                        </Card>
                    </Grid>
                    <Grid xs={12}><br></br></Grid>
                    <Grid className={styles.questionContainer} xs={8} >
                        <div className={styles.questionText}>
                            <Latex>{`$${question}$`}</Latex>

                        </div>

                    </Grid>
                    <Grid xs={0.1}></Grid>
                    <Grid container className={styles.statsContainer} justifyContent={"flex-center"} xs={3.9} >
                        <Grid textAlign={"center"} xs={12} fontWeight={700} >
                            Chat:
                        </Grid>
                        <Grid item xs={12} className={styles.chatBox} alignSelf={"start"} sx={{height: 320,
          overflow: "hidden",
          overflowY: "scroll",}}>
                                {messages.map((msg, i) => {
                                return (
                                    <div
                                    className="w-full py-1 px-2 border-b border-gray-200"
                                    key={i}
                                    >
                                    {msg.author}: {msg.message}   
                                    </div>
                                );
                                })}
                        </Grid>
                    </Grid>
                    <Grid xs={12}><br></br></Grid>

                    <Grid xs={8}>
                        <TextField className={styles.answerField} id="outlined-basic" label="Answer" variant="outlined"
                            onKeyUp={handleKeypress}
                            inputRef={answerRef}
                        />
                    </Grid>
                    
                    <Grid xs={0.1}></Grid>
                    <Grid xs={3.9}>
                        <TextField className={styles.answerField} id="standard-text" label="Chat" variant="outlined"
                            onKeyUp={handleKeypressForChat}
                            inputRef={chatRef}
                        />
                    </Grid>
                    
                </Grid>
            </Box>
        </Container>)
    }

    return ( <>
    <Dialog
        open={openDialogue}
        onClose={handleCloseDialogue}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
         <DialogTitle id="alert-dialog-title">
       {(userHealth > otherHealth) ?  "You WIN"  : "You Lost"}
    </DialogTitle>
    <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Thank you for playing
          </DialogContentText>
        </DialogContent>
       <DialogActions>
          <Button onClick={handleCloseDialogue}>Go back to Home page</Button>
        </DialogActions>
        
      </Dialog>
    {

        (gameStarted) ?
        <div>
            {/* <GameComponent question={currentQuestion} onSubmitAnswer={onSubmitAnswer} health={userHealth} otherHealth={otherHealth}/>  */}
            {GameContainer(currentQuestion, userHealth, otherHealth)}
        </div> :
        <Container sx={ { mt:20}}>
            <Box>
                <Grid container spacing={4}  direction="column" justifyContent="center" alignItems="center">
        
                    <Grid className={styles.roomTitle} item xs={3}>
                        Room : {roomId}
                    </Grid>
                    <Grid item xs={3}>
                        <CircularProgress />
                    </Grid>
                    <Grid item xs={3}>
                        Waiting for another player...
                    </Grid>
                </Grid>
            </Box>
        </Container>
    }
    </>
    )
}

// export async function getStaticProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }

export default GameRoomView