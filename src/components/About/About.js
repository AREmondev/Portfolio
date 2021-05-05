import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import aboutImg from '../../img/are.jpg'

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
                  <li>abdurrahmanemondev@gmail.com</li>
                </ul>
                <ul>
                  <li className="about-list-title">Address:</li>
                  <li>Nachole, Chapai Nawabganj, Rajshahi </li>
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
                  <a
                    href="https://www.facebook.com/abdurrahmanemondev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab facebook fa-facebook-f"></i>
                  </a>
                  {/* <a  href="https://www.facebook.com/abdurrahmanemondev/"
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab twitter fa-twitter"></i>
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/abdur-rahman-a5b12a1a3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab linkdin fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/AREmondev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
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
