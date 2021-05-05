import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import aboutImg from '../../img/about-img.jpg'

function About() {
  return (
    <section className="about-us" id="about">
      <div className="container-wide">
        <div className="row">
          <div className="col lg-6">
            <div className="about-img ">
              <img
                style={{ border: '5px solid #ffbb00fb' }}
                src={aboutImg}
                alt="About Img"
              />
            </div>
          </div>
          <div className="col lg-6 ">
            <div className="about-content">
              <h3 className="title">
                About <span className="color-text">Me</span>
              </h3>
              <h4>
                I'm <span className="element color-text">Web Developer</span>
              </h4>
              <p>
                I am a Full Stack Developer and Specializes in JAVASCRIPT
                (React, Node.js, Express). And Have Lot Of Experience Building
                Modern Web Applications. I was Completed Lot of MERN Stack
                Project.
              </p>
              <div className="about-list">
                <ul>
                  <li className="about-list-title">Email ID:</li>
                  <li>abdurrahmanemondev@gmail.com@gmail.com</li>
                </ul>
                <ul>
                  <li className="about-list-title">Address:</li>
                  <li>Chapai Nawabganj District, Rajshahi, Bangladesh </li>
                </ul>
                <ul>
                  <li className="about-list-title">Age:</li>
                  <li>23</li>
                </ul>
                <ul>
                  <li className="about-list-title">Nationality:</li>
                  <li>Bangladeshi</li>
                </ul>
                <ul>
                  <li className="about-list-title">Study:</li>
                  <li>National University</li>
                </ul>
              </div>
              <div className="about-title-bottom row ">
                <button className="btn link-btn" to="#">
                  <span>My Work</span>
                </button>
                <div className="social-link  row">
                  <Link to="/">
                    <i className="fab facebook fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab twitter fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab linkdin fa-linkedin-in"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab instagram fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
