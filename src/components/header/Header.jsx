import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

import GoogleAuth from "./../googleAuth/GoogleAuth"

class Header extends Component {
    state = {
        activeLink: ''
    }

    componentDidMount(){
        console.log(this.props)
        const {props: {location: { pathname }}} = this;
        const _pathname = pathname.substr(1).charAt(0).toUpperCase() + pathname.substr(2)
        this.setState({
            activeLink: pathname === '/' ? 'Discover' : _pathname
        })
    }

    changeLink(e){
        this.setState({
            activeLink: e.target.innerText.trim()
        }, () => {
            // console.log(this.state.activeLink)
        })
    }
    render(){
        return (
            <nav className="header">
                <Link onClick={e => this.changeLink(e)} to="/" className="header__logo--container">
                    <img className="header__logo--container__img" src="/logo-twitch.png" alt="twitch logo"/>
                    <h1 className="h2 header__logo--container__text">Twitch</h1>
                </Link>
                <div className="header__status">
                    <img className="header__status--profile" src="/profile.jpeg" alt="profile pic" />
                    <div className="header__status--details">
                        <p>Riley Cooper</p>
                        <span className="header__status--details__wrapper">
                            <div className="header__status--details__signal"/> 
                            <p className="header__status--details__text">Online</p>
                        </span>
                    </div>
                </div>
                <div className="header__links">
                    <Link to="/" onClick={e => this.changeLink(e)}><h2 className={`header__links--link ${this.state.activeLink === 'Discover' ? 'active' : ''}`}><i className="far fa-compass"></i> Discover</h2></Link>
                    <Link to="/streams" onClick={e => this.changeLink(e)}><h2 className={`header__links--link ${this.state.activeLink === 'Streams' ? 'active' : ''}`}><i className="far fa-compass"></i> Streams</h2></Link>
                    {/* <Link to="/register" onClick={e => this.changeLink(e)}><h2 className={`header__links--link ${this.state.activeLink === 'Register' ? 'active' : ''}`}> <i className="far fa-user"></i> Register</h2></Link> */}
                    <GoogleAuth />
                </div>
            </nav>
        )
    }
}

export default withRouter(Header)
