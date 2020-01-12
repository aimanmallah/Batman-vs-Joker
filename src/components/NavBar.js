import React from 'react'

import logo from '../images/batman_logo.png'

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="batman logo"/>
            <h1 className="title">BATTLE SIMULATOR</h1>
        </div>
    )
}

export default NavBar