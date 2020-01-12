export const diceRolled = () => {
    let diceArray = [], i
    for(i=0; i < 4; i++) {
        diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return {
        type: 'DICE_ROLLED',
        payload: {
            batmanRolls: diceArray.slice(0,2),
            jokerRolls: diceArray.slice(2,4)
        }
    }
}

export const startGame = () => {
    return {
        type: 'START_GAME'
    }
}