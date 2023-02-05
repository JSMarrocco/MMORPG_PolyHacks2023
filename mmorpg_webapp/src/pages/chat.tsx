import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { log } from "console";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import {v4 as uuidv4} from 'uuid';


let socket: any;

type Message = {
  author: string;
  message: string;
};

const ChatView = () => {

    
    const [username, setUsername] = useState("");
    const [chosenUsername, setChosenUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<Message>>([]);

    const [roomId, setRoomId] = useState();

    useEffect(() => {
        socketInitializer();
    }, []);

    const socketInitializer = async () => {
        // We just call it because we don't need anything else out of it
        // await fetch("/api/socket");

        socket = io('http://localhost:5000');


        socket.on("joinRoomSuccess", (incomingRoomId) => {
            console.log(incomingRoomId)
            setRoomId(incomingRoomId)
        })
    };

    const onGetGameLink = async () => {
        const newRoomId=uuidv4()
        socket.emit("joinRoom", { roomId: newRoomId} )

    }


    
    return (
        <Container sx={ { mt:10}}>
            <Box>
                <Grid container spacing={1}  direction="column" justifyContent="center" alignItems="center">
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => {onGetGameLink()}}>Get Game Link</Button>
                    </Grid>
                    <Grid item xs={3}>
                        {roomId}
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

export default ChatView;