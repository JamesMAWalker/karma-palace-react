import React from 'react'

import '../style/header.scss'

const Header = () => {

  return (
    <header className="header">
        <div className="header__title">
            <h1 className="header__title-main">Let's play Karma Palace<button className="btn" id="begin-game">Begin!</button></h1>
            <p className="header__title-sub">Legendary Backpacker Card Game</p>
        </div>
        
    </header>
  )
}

export default Header
