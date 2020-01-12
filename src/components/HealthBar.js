import React from 'react'

const HealthBar = ({ width }) => {
    return (
        <>
            <h3 className="healthLabel">HEALTH: {width}/100</h3>
            <div className="maxHealth">
                <div className="currentHealth" style={{width: `${width}%`}}></div>
            </div>
        </>
    )

}

export default HealthBar