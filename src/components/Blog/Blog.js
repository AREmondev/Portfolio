import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from '../../img/react-query.png'
import './Blog.css'
function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container-wide">
        <div className="blog-title mb-10" data-wow-duration="1.2s">
          <h3 className="title-heading">
            My <span className="color-text"> Blog</span>
          </h3>
          <p className="heading">
            My latest blog there i am writing about technology and programing
            related
          </p>
        </div>
        <div className="row">
          <div
            className="col lg-4 md-6 blog-post wow animate__fadeInLeft"
            data-wow-duration="1.2s"
          >
            <div className="card mb-5 blog-card">
              <div className="img">
                <h5>
                  <Link to="/">React Query</Link>
                </h5>
                <img src={blogImg} alt="Blog-img" />
              </div>
              <div className="blog-content">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={
                    'https://abdurrahmanemondev.medium.com/all-about-react-query-a5052fdaa8c7'
                  }
                  className="mb-4"
                >
                  <h4 className="blog-title">All About React Query.</h4>
                </a>
                <div className="blog-meta ">
                  <h5 className="m-0">5 May 2021</h5>
                  <Link className="ml-auto" to="/">
                    <i className="fas mr-2 fa-user-alt"></i>Abdur Rahman
                  </Link>
                </div>
                <p>
                  React Query is a most simple and front-end lover library that
                  uses to handle ReactJs state management ...
                </p>
                <a
                  target="_blank"
                  className="read-more"
                  rel="noreferrer"
                  href={
                    'https://abdurrahmanemondev.medium.com/all-about-react-query-a5052fdaa8c7'
                  }
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
