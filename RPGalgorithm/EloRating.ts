let eloA = 0;
let eloB = 0;
const gameResult = 1;

function calculateElo(eloA: number, eloB: number, gameResult: number): [number, number] {
  const expScoreA = 1 / (1 + 10 ** ((eloB - eloA) / 400));
  const expScoreB = 1 / (1 + 10 ** ((eloA - eloB) / 400));

  const K = 16;
  let newEloA = 0;
  let newEloB = 0;

  if (gameResult === 1) { // Player 1 wins
    newEloA = Math.round(eloA + K * (1 - expScoreA));
    newEloB = Math.round(eloB + K * (0 - expScoreB));
  } else if (gameResult === 2) { // Draw
    newEloA = Math.round(eloA + K * (0.5 - expScoreA));
    newEloB = Math.round(eloB + K * (0.5 - expScoreB));
  } else if (gameResult === 3) { // Player 2 loses
    newEloA = Math.round(eloA + K * (0 - expScoreA));
    newEloB = Math.round(eloB + K * (1 - expScoreB));
  }

  return [newEloA, newEloB];
}

const [new_eloA, new_eloB] = calculateElo(eloA, eloB, gameResult);
console.log(new_eloA);
console.log(new_eloB);
