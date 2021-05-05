import React from 'react'
import './Project.css'
import portfolio1 from '../../img/eshop.png'
import portfolio2 from '../../img/modikhana.png'
import portfolio3 from '../../img/builder.png'
import portfolio4 from '../../img/responsivanika.png'
import portfolio5 from '../../img/dashboarddesogn.png'
import portfolio6 from '../../img/AppLabdesign.png'
function Project() {
  return (
    <section className="project" id="project">
      <div className="container-wide">
        <div className="project-title">
          <h3 className="title-heading">
            My <span className="color-text"> Portfolio</span>
          </h3>
          <p className="heading">
            I have almost 25+ Completed Responsive Web application , React and
            MERN Project.
          </p>
        </div>
        <div className="main-project">
          <div className="project-catagory text-center">
            <ul className="project-catagory-select">
              <li className="active-catagory">All</li>
              <li>React</li>
              <li>MERN</li>
              <li className="m-0">Responsive</li>
            </ul>
          </div>
        </div>
        <div className="row project-items">
          <a
            href="https://tender-heisenberg-7c181f.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 item  project-item "
            data-wow-duration="1.2s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio1} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>MERN</p>
                <h4>E-Shop MERN Project</h4>
              </div>
            </div>
          </a>
          <a
            href="https://infallible-lichterman-52e071.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 webdevelopment webdesign item project-item wow animate__fadeInUp"
            data-wow-duration="1.35s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio3} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>MERN</p>
                <h4>Builder MERN Project</h4>
              </div>
            </div>
          </a>
          <a
            href="https://modikhana-shop.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 webdesign graphics item project-item wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio2} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>MERN</p>
                <h4>Modikhana MERN project</h4>
              </div>
            </div>
          </a>
          <a
            href="https://aremondev.github.io/anikas/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 webdesign graphics item project-item wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio4} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>RESPONSIVE</p>
                <h4>ANIKAS Responsive Portfolio </h4>
              </div>
            </div>
          </a>
          <a
            href="https://aremondev.github.io/dashboard/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 webdesign graphics item project-item wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio5} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>RESPONSIVE</p>
                <h4>Dashboard Responsive Design </h4>
              </div>
            </div>
          </a>
          <a
            href="https://aremondev.github.io/applab/"
            target="_blank"
            rel="noreferrer"
            className="col md-6 lg-4 webdesign graphics item project-item wow animate__fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="portfolio-img">
              <div className="img">
                <img src={portfolio6} alt="" />
              </div>
              <div className="project-img-overflow">
                <p>RESPONSIVE</p>
                <h4>AppLab Responsive Landing Page</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project
