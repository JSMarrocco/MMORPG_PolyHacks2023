eloA = 0
eloB = 0
gameResult = 1

def calculateElo(eloA, eloB, gameResult):

    expScoreA = 1 / (1 + 10 ** ((eloB - eloA) / 400))
    expScoreB = 1 / (1 + 10 ** ((eloA - eloB) / 400))

    K = 16
    newEloA = 0
    newEloB = 0

    if (gameResult == 1): # Player 1 wins
        newEloA = round(eloA + K * (1 - expScoreA))
        newEloB = round(eloB + K * (0 - expScoreB))
    elif (gameResult == 2): # Draw
        newEloA = round(eloA + K * (0.5 - expScoreA))
        newEloB = round(eloB + K * (0.5 - expScoreB))
    elif (gameResult == 3): # Player 2 loses
        newEloA = round(eloA + K * (0 - expScoreA))
        newEloB = round(eloB + K * (1 - expScoreB))

    return (newEloA, newEloB)

new_eloA, new_eloB = calculateElo(eloA, eloB, gameResult)
print(new_eloA)
print(new_eloB)