import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            <img className="header__logo" src="/logo-twitch.png" alt="twitch logo"/>
            <div className="header__links">
                <Link to="/streams/list">Streams</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Header
