import React from 'react'

import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'

const renderDiceImage = (n) => {
    switch(true){
        case n === 1:
            return <img className="Dice" src={one} alt="one"/>
        case n === 2:
            return <img className="Dice" src={two} alt="two"/>
        case n === 3:
            return <img className="Dice" src={three} alt="three"/>
        case n === 4:
            return <img className="Dice" src={four} alt="four"/>
        case n === 5:
            return <img className="Dice" src={five} alt="five"/>
        case n === 6:
            return <img className="Dice" src={six} alt="six"/>
        default:
            return <></>
    }
}

const Dice = (dice) => {
    return (
        <div className="dice">
        {renderDiceImage(dice.dice)}
        </div>
    )
}

export default Dice