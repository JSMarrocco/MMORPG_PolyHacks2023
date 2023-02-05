import styles from "../styles/Game.module.css"
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
import { useRef, useState } from 'react';
import { questionquery } from "../utils/derivatives"
import { answerverify } from "../utils/answerchecking"

var Latex = require('react-latex');

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});



const Game = () => {

    const [question, setQuestion] = useState("0");
    const answerRef = useRef();

    const handleKeypress = (e: { keyCode: number; }) => {

        if (e.keyCode == 13) {
            setQuestion(questionquery());
            answerverify();
            answerRef.current.value = "";

        }
    }

    return (
        <Container>
            <h2>Header</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid className={styles.main} container spacing={2}>


                    <Grid className={styles.score} xs={4}>
                        {/* Player 1 stats */}
                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={0}>
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
                    <Grid className={styles.timer} xs={4}>
                        <p>time</p>
                    </Grid>


                    {/* Player 2 stats */}
                    <Grid className={styles.score} xs={4}>
                        <Card>
                            <Box sx={{ p: 2, display: 'flex' }}>
                                <Avatar variant="rounded" src="avatar1.jpg" />
                                <Stack spacing={0.5}>
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
                    <Grid className={styles.questionContainer} xs={8}>
                        <div className={styles.questionText}>
                            <Latex>{`$${question}$`}</Latex>

                        </div>

                    </Grid>
                    <Grid className={styles.statsContainer} xs={4}>
                        <p>stats</p>
                    </Grid>
                    <Grid xs={8}>
                        <TextField className={styles.answerField} id="outlined-basic" label="Answer" variant="outlined"
                            onKeyUp={handleKeypress}
                            inputRef={answerRef}
                        />
                    </Grid>
                    <Grid className={styles.chat} xs={4}>
                        <p>yo</p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
};

export default Game;