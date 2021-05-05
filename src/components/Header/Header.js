import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    if (menu === true) {
      setMenu(false)
    } else {
      setMenu(true)
    }
    console.log(menu)
  }
  const handleMenuItem = () => {
    setMenu(false)
  }
  return (
    <header>
      <div className="container-wide">
        <div className="header">
          <div className="logo-area">
            <Link className="logo" to="/">
              ARE
            </Link>
          </div>
          <div
            onClick={() => handleMenu()}
            class={`menu-btn ${menu ? 'active' : ''}`}
          >
            <span class="menu-logo first"></span>
            <span class="menu-logo middle1 middle"></span>
            <span class="menu-logo middle2 middle"></span>
            <span class="menu-logo last"></span>
          </div>
          <div className={`menu-area ${menu ? 'active' : ''}`}>
            <ul className="menu">
              <li>
                <Link onClick={() => handleMenuItem()} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => handleMenuItem()} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => handleMenuItem()} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => handleMenuItem()} to="/project">
                  Project
                </Link>
              </li>
              <li>
                <Link onClick={() => handleMenuItem()} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
