const getDifferenceOfArray = (a, b) => {
    return a.reduce((o, c) => o + c, 0) - b.reduce((o, c) => o + c, 0)
}

const orToZero = (n) => n < 0 ? 0 : n

export const delegateDiceRolled = (state, payload) => {
    const rollDifference = getDifferenceOfArray(payload.batmanRolls, payload.jokerRolls);
    return {
        ...state,
        batmanRolls: payload.batmanRolls,
        jokerRolls: payload.jokerRolls,
        rollDifference,
        batmanHealth: orToZero(rollDifference < 0 ? state.batmanHealth + rollDifference: state.batmanHealth),
        jokerHealth: orToZero(rollDifference > 0 ? state.jokerHealth - rollDifference : state.jokerHealth),
        inGameMode: true
    }
}