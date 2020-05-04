import React from 'react'
import {withRouter, Link} from "react-router-dom"

function PageNav(props) {
    console.log(props)
    return (
        <nav className="main-app__sites--nav">
          <div className="main-app__sites--nav__arrows">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="main-app__sites--nav__settings">
            <Link to='/streams/create'><i class="far fa-plus-square"></i></Link>
            <i className="fas fa-cog"></i>
            <i className="far fa-moon"></i>
          </div>
        </nav>
    )
}

export default withRouter(PageNav)
