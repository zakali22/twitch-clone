import React from 'react'

function PageNav() {
    return (
        <nav className="main-app__sites--nav">
          <div className="main-app__sites--nav__arrows">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="main-app__sites--nav__settings">
            <i className="fas fa-cog"></i>
            <i className="far fa-moon"></i>
          </div>
        </nav>
    )
}

export default PageNav
