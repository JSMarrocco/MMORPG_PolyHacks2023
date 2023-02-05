import styles from "../styles/Home.module.css"
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Grid, Button, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router'
import { useRef, useState } from 'react';



export default function Home() {

    const router = useRouter()
    const gameLinkInputRef = useRef()

    const onGetGameLink = async () => {
        const newRoomId = uuidv4()

        router.push(`/game/${newRoomId}`)
    }

    const onJoinExistingGame = async () => {
        router.push(`/game/${gameLinkInputRef.current.value}`)
    }

    const handleSubmit = () => {

    }


    return (
        <Container sx={{}}>
            <h1>Header</h1>
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
                            <Typography fontWeight={700}>Create Room:</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="roomID"
                                label="Room ID"
                                name="roomID"
                                autoComplete="roomID"
                                autoFocus
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => { onGetGameLink() }}
                            >
                                Create New Room
                            </Button>

                        </Box>
                    </Grid>




                    <Grid className={styles.createRoom} item xs={12}>

                        <Box>
                            <Grid container spacing={1} justifyContent="center" alignItems="center">
                                <Grid className={styles.createRoom} item xs={4}>

                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                                        <Typography fontWeight={700}>Create Room:</Typography>
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
                                            Create New Room
                                        </Button>

                                    </Box>


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