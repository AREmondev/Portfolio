import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../img/abdurrahman1.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="home-hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container-wide">
        <div className="hero-main">
          <div className="hero">
            <img src={hero} alt="Hero-img" />
            <h4>Hey, I'm</h4>
            <h2>
              <span className="color-text">Abdur Rahman</span>
            </h2>
            <p>Jr Front End Developer</p>
            <div className="home-btn">
              <button className="btn link-btn mr-3" href="#">
                <span>More About Me</span>
              </button>
              <button className="link-btn-outline" href="#">
                Download Cv <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="next-section-link">
          <button href="#about">
            <i
              style={{ color: '#fff' }}
              className="fas fa-angle-double-down"
            ></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
