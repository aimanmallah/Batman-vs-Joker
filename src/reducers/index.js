import { combineReducers } from 'redux'

import { delegateDiceRolled } from './utils'

const defaultState = {
    batmanHealth: 100,
    jokerHealth: 100,
    batmanRolls: [0,0],
    jokerRolls: [0,0],
    rollDifference: 0,
    inGameMode: false
  }


const gameReducer = (state = defaultState, action) => {
    const { type, payload } = action
    switch(type) {
        case 'DICE_ROLLED': 
            return delegateDiceRolled(state, payload)
        case  'START_GAME':
            return {
                ...defaultState
            }
        default:
            return state
    }
}

export default combineReducers({
    data: gameReducer
})