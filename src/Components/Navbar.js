import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <form className="d-flex col-12 col-md-7 col-lg-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'}`} type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-lg-3 my-3 my-lg-0 text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

//Props Types & Required Use
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string
  }

//Default Props
 Navbar.defaultProps = {
   title: "TextUtils",
   aboutText: "About"
 } 
