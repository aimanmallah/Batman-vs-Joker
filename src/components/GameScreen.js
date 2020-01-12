import React from 'react'
import { connect } from 'react-redux'

import batman from'../images/batman.png'
import joker from '../images/joker.png'
import HealthBar from './HealthBar'
import Dice from './Dice'
import '../style.css'

import { diceRolled, startGame } from '../actions'


class GameScreen extends React.Component {
    
    renderAttackMessage = (difference) => {
        switch(true){
        case (difference > 0): 
            return(<> YOU HIT {difference}!</>)
        case(difference < 0):
            return(<> JOKER HITS {-difference} DAMAGE!</>)
        default:
            return(<>JOKER BLOCKS YOUR ATTACK!</>)
        }
    }

    render() {
        const {
            batmanHealth,
            jokerHealth, 
            diceRolled, 
            startGame, 
            batmanRolls, 
            jokerRolls, 
            rollDifference, 
            inGameMode
        } = this.props 

        return (
            <div className="container">
                <div>
                    <HealthBar width={batmanHealth}/>
                    <img src={batman} alt="batman"/>
                    <div className="diceContainer">
                        <Dice dice={batmanRolls[0]}/>
                        <Dice dice={batmanRolls[1]}/>
                    </div>
                </div>

                <div className="middleSection">
                    {
                        (batmanHealth === 0 || jokerHealth === 0)
                        ?   <>
                                {batmanHealth === 0 && <h2 className="loser">GAME OVER</h2>}
                                {jokerHealth === 0 && <h2 className="winner">YOU WIN</h2>}
                                <button onClick={startGame}>PLAY AGAIN?</button>
                            </>
                        :   <>
                                {inGameMode && <h2>{this.renderAttackMessage(rollDifference)}</h2>}
                                <button onClick={diceRolled}>ATTACK!</button>
                            </>
                        
                    }
                </div>

                <div>
                    <HealthBar width={jokerHealth}/>
                    <img src={joker} alt="joker"/>
                    <div className="diceContainer">
                        <Dice dice={jokerRolls[0]}/>
                        <Dice dice={jokerRolls[1]}/>
                    </div>
                </div>
            </div>
        )
    }
}

const getDifferenceOfArray = (a, b) => {
    return a.reduce((o, c) => o + c, 0) - b.reduce((o, c) => o + c, 0)
}

const mapStateToProps = state => {
    return {
        batmanHealth: state.data.batmanHealth,
        jokerHealth: state.data.jokerHealth,
        batmanRolls: state.data.batmanRolls,
        jokerRolls: state.data.jokerRolls,
        rollDifference: getDifferenceOfArray(state.data.batmanRolls, state.data.jokerRolls),
        inGameMode: state.data.inGameMode
    }
}

const mapDispatchToProps = {
    diceRolled,
    startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)