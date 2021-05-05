import React from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
function Contact() {
  function sendEmail(e) {
    e.preventDefault()
    console.log('submit')
    emailjs
      .sendForm(
        'service_z5ifvum',
        'template_tykxnfw',
        e.target,
        'user_wMeUeXMqLWamZBfaXOhPB',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <section className="contact-us" id="contact">
      <div className="container-wide">
        <div className="contact-us-title  " data-wow-duration="1.2s">
          <h3 className="title-heading">
            Contact <span className="color-text">Me</span>
          </h3>
          <p className="heading">
            My time is very flexible, So Any Time You Can Contact With Me.
          </p>
        </div>
        <div className="row">
          <div
            className="col lg-6 contact-information "
            data-wow-duration="1.2s"
          >
            <div className="address-area">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="mobile-number">
                <h4 className="m-0">Phone Number</h4>
                <div className="number">+880 1644686490</div>
              </div>
            </div>
            <div className="address-area">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="mobile-number">
                <h4 className="m-0">Email Address</h4>
                <div className="number">abdurrahmanemondev@gmail.com</div>
              </div>
            </div>
            <div className="address-area mb-0">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="mobile-number">
                <h4 className="m-0">Location</h4>
                <div className="number">Nachole, Chapinawabgonj, Rajshahi</div>
              </div>
            </div>
          </div>

          <div
            className="col lg-6 wow animate__fadeInRight"
            data-wow-duration="1.2s"
          >
            <div className="contact-msg">
              <h3 className="title mb-5">
                Send <span className="color-text">Message</span>
              </h3>
            </div>
            <form onSubmit={sendEmail} className="input-area mt-50 row">
              <div className="col md-6">
                <div className="form-group">
                  <input
                    id="first-name"
                    className="form-control"
                    required
                    name="name"
                    type="text"
                  />
                  <label for="first-name">Full Name</label>
                </div>
              </div>
              <div className="col md-6">
                <div className="form-group">
                  <input
                    id="Email"
                    className="form-control"
                    required
                    type="email"
                    name="email"
                  />
                  <label for="last-name">Email</label>
                </div>
              </div>
              <div className="col md-12">
                <div className="form-group">
                  <input
                    id="subject"
                    className="form-control"
                    required
                    type="text"
                    name="subject"
                  />
                  <label for="email">Subject</label>
                </div>
              </div>
              <div className="col md-12">
                <div className="form-group">
                  <textarea
                    required
                    name="message"
                    id="text-message"
                    className="form-control message"
                  ></textarea>
                  <label for="text-message">Message</label>
                </div>
              </div>
              <div className="col md-12">
                <button type="submit">
                  <button className="btn">
                    <span>send Message</span>
                  </button>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
