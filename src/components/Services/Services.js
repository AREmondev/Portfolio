import React from 'react'
import './Services.css'

function Services() {
  return (
    <section className="service" id="service">
      <div className="container-wide">
        <div className="service-title ">
          <h3 className="title-heading">
            My <span className="color-text">Services</span>
          </h3>
          <p className="heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            praesentium nobis repudiandae.
          </p>
        </div>
        <div className="row">
          <div className="col lg-4 md-6" data-wow-duration="1.2s">
            <div className="app-design service-card">
              <i className="fab fa-app-store-ios"></i>
              <h4>Web Design</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the when looking at its layout.
              </p>
            </div>
          </div>
          <div className="col lg-4 cl md-6 ">
            <div className="app-design service-card">
              <i className="fas fa-shipping-fast"></i>
              <h4>Web Development</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the when looking at its layout.
              </p>
            </div>
          </div>
          <div className="col lg-4 cl md-6">
            <div className="app-design service-card">
              <i className="fas fa-bezier-curve"></i>
              <h4>Web Rebuild / Clone</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
