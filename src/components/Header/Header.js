import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header>
      <div className="container-wide">
        <div className="header">
          <div className="logo-area">
            <Link className="logo" to="/">
              ARE
            </Link>
          </div>
          <div class="menu-btn">
            <span class="menu-logo first"></span>
            <span class="menu-logo middle1 middle"></span>
            <span class="menu-logo middle2 middle"></span>
            <span class="menu-logo last"></span>
          </div>
          <div className="menu-area">
            <ul className="menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div class="menu-btn">
              <span class="menu-logo first"></span>
              <span class="menu-logo middle1 middle"></span>
              <span class="menu-logo middle2 middle"></span>
              <span class="menu-logo last"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
