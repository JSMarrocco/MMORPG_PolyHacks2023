import styles from "@/styles/Game.module.css"
import Grid from '@mui/material/Grid'; // Grid version 1
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { questionquery } from "@/utils/derivatives"
import { answerverify } from "@/utils/answerchecking"
import { tolatex } from "@/utils/latexconverting"
import eLeetMath from "../public/eLeetMath.svg"
import Image from "next/image";

var Latex = require('react-latex');

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});



const GameComponent = ({ question }) => {

    // const [question, setQuestion] = useState(qts);
    const answerRef = useRef();

    const handleKeypress = async (e: { keyCode: number; }) => {

        if (e.keyCode == 13) {

            answerRef.current.value = "";

        }
    }

    return (
        <Container >
        
            <Box sx={{ flexGrow: 1 }}>
                <Grid className={styles.main} container spacing={1}>

                    <Grid xs={12}><br></br></Grid>
                    <Grid className={styles.score} xs={4}>

                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={2}>
                                    <Typography fontWeight={700}>Michael Scott</Typography>
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={5}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={1}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />

                                </Stack>
                                <Typography fontWeight={700}>Elo: 400</Typography>
                            </Box>
                        </Card>

                    </Grid>
                    <Grid container  xs = {4} sx={{ mt: 0, mb: 3 }} spacing={0} justifyContent="center" alignItems="center">
                        <Image src={eLeetMath} height={100} width={100} alt="eleetmath"/>
        
                    </Grid>
                    
                    <Grid xs={0.1}>
                    </Grid>


                    {/* Player 2 stats */}
                    <Grid className={styles.score} xs={3.9}>
                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={2}>
                                    <Typography fontWeight={700}>Michael Scott</Typography>
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={2}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={1}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />

                                </Stack>
                                <Typography fontWeight={200}>400</Typography>
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
                    <Grid className={styles.statsContainer} xs={3.9} >
                        <p>stats</p>
                    </Grid>
                    <Grid xs={12}><br></br></Grid>

                    <Grid xs={8}>
                        <TextField className={styles.answerField} id="outlined-basic" label="Answer" variant="outlined"
                            onKeyUp={handleKeypress}
                            inputRef={answerRef}
                        />
                    </Grid>
                    <Grid xs={0.1}></Grid>
                    <Grid className={styles.chat} xs={3.9}>
                        <TextField className={styles.answerField} id="outlined-basic" variant="outlined"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default GameComponent;