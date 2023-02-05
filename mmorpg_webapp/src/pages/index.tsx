import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Button, TextField } from '@mui/material';
import {v4 as uuidv4} from 'uuid';
import { useRouter } from 'next/router'
import { useRef, useState } from 'react';



export default function Home() {

    const router = useRouter()
    const gameLinkInputRef = useRef()

    const onGetGameLink = async () => {
        const newRoomId=uuidv4()

        router.push(`/game/${newRoomId}`)
    }

    const onJoinExistingGame = async () => {
        router.push(`/game/${gameLinkInputRef.current.value}`)
    }
    

  return (
    <Container sx={ { mt:10}}>
            <Box>
                <Grid container spacing={1}  justifyContent="center" alignItems="center">
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => {onGetGameLink()}}>Get Game Link</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>
                            <Grid container spacing={1}  justifyContent="end" alignItems="center">
                                <Grid item xs={4}>
                                    <TextField id="standard-basic" label="Game Id" variant="standard" inputRef={gameLinkInputRef} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="contained" onClick={() => {onJoinExistingGame()}}>Join Existing Game</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
  );
}