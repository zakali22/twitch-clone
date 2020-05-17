import React, {Component} from 'react'
import {withRouter, Link} from "react-router-dom"
import { connect } from 'react-redux'

class PageNav extends Component {
  render(){
    return (
        <nav className="main-app__sites--nav">
          <div className="main-app__sites--nav__arrows">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="main-app__sites--nav__settings">
            {
              this.props.signedIn ? <Link to='/streams/create'><i className="far fa-plus-square"></i></Link> : null
            }
            <i className="fas fa-cog"></i>
            <i className="far fa-moon"></i>
          </div>
        </nav>
    )
  }
}

const mapStateToProps = ({auth: {signedIn}}) => {
  return {
    signedIn
  }
}

const wrapper = withRouter(PageNav)

export default connect(mapStateToProps)(wrapper)
