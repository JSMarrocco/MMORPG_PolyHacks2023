import styles from "../styles/Home.module.css"
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router'
import { useRef, useState } from 'react';
import eLeetMath from "../../public/eLeetMath.svg";
import Image from "next/image";

export default function Home() {

    const router = useRouter()
    const gameLinkInputRef = useRef()
    const gameCreateInputRef = useRef()

    const onGetGameLink = async () => {
        router.push(`/game/${gameCreateInputRef.current.value}`)
    }

    const onJoinExistingGame = async () => {
        router.push(`/game/${gameLinkInputRef.current.value}`)
    }

    const handleSubmit = () => {

    }


    return (
        <Container sx={{}}>
            <Grid container  sx={{ mt: 5, mb: 5 }} spacing={1} justifyContent="center" alignItems="center">
            <Image src={eLeetMath} height={200} width={200} alt="eleetmath"/>

            </Grid>

            <Box>
                <Grid container spacing={1} justifyContent="center" alignItems="center">

                    <Grid className={styles.createRoom} item xs={5}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                            <Typography fontWeight={700}>Username:</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => { onGetGameLink() }}
                            >
                                Set Name
                            </Button>

                        </Box>

                    </Grid>


                    <Grid className={styles.createRoom} item xs={6}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                            <Typography fontWeight={700}>Create or Join Room:</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="roomID"
                                label="Room ID"
                                name="roomID"
                                inputRef={gameCreateInputRef}
                                autoComplete="roomID"
                                autoFocus
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => { onGetGameLink() }}
                            >
                                Join Room
                            </Button>

                        </Box>
                    </Grid>




                    <Grid className={styles.createRoom} item xs={12}>

                        <Box>
                            <Grid container spacing={1} justifyContent="center" alignItems="center">
                                <Grid className={styles.createRoom} item xs={4}>
{/* 
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                                        <Typography fontWeight={700}>Join Room:</Typography>
                                        <TextField 
                                            fullWidth 
                                            margin="normal"
                                            required
                                            id="standard-basic"
                                            label="Game Id"
                                            name="roomID"
                                            autoComplete="roomID"
                                            inputRef={gameLinkInputRef}
                                            autoFocus />
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={() => { onJoinExistingGame() }}
                                        >
                                            Connect to Room
                                        </Button>

                                    </Box> */}


                                    <Grid className={styles.createRoom} item xs={8}>
                                        <Typography fontWeight={700}>Active Rooms:</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}