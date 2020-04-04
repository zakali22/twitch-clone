import React, { Component } from 'react'
import {connect} from "react-redux"
import {signIn, signOut} from "../../actions/auth"

class GoogleAuth extends Component {
    componentDidMount(){
        console.log(this.props)
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '688673160568-ms13cb6vahpthvttbr13tmdoj165218i.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.isUserSignedIn(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(() => {
                    this.isUserSignedIn(this.auth.isSignedIn.get())
                })
            })
        })
    }

    isUserSignedIn = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn()
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton(){
        if(this.props.signedIn === null){
            return null
        } else if(this.props.signedIn){
            return (
                <h2 className={`header__links--link`} onClick={e => this.props.signOut() }> <i className="far fa-user"></i> Sign out</h2>
            )
        } else {
            return (
                <h2 className={`header__links--link`} onClick={e => this.props.signIn() }> <i className="far fa-user"></i> Sign in</h2>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.auth.signedIn
    }
}

export default connect(mapStateToProps, {signOut, signIn})(GoogleAuth)
