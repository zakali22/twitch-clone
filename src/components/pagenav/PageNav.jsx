import React from 'react'

function PageNav() {
    return (
        <nav className="main-app__sites--nav">
          <div className="main-app__sites--nav__arrows">
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i>
          </div>
          <div className="main-app__sites--nav__settings">
            <i class="fas fa-cog"></i>
            <i class="far fa-moon"></i>
          </div>
        </nav>
    )
}

export default PageNav
