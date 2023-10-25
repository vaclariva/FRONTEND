import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="main-wrap">
      <div className="footer-wrap">
        <div className="footer-wrap-1">
          <div className="footer-section">
            <h1>About</h1>
            <Link to="#">Services</Link>
            <Link to="#">Portfolio</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Careers</Link>
          </div>
          <div className="footer-section">
            <h1>Resources</h1>
            <Link to="#">Docs</Link>
            <Link to="#">Blog</Link>
            <Link to="#">eBooks</Link>
            <Link to="#">Videos</Link>
          </div>
          <div className="footer-section">
            <h1>Contact</h1>
            <Link to="#">Help</Link>
            <Link to="#">Sales</Link>
            <Link to="#">Advertise</Link>
          </div>
          <div className="footer-section">
            <h1>Stay Connected</h1>
            <p>Subscribe to our newsletter to receive latest news.</p>
            <form action="">
              <input refs="email" type="email" name="email" id="email" size="30" placeholder="Enter Email Address" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-wrap-2">
          <div className="line"></div>
          <div className="social-link">
            <Link to="#">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter-square"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="first-box">
          <Link to="#">Terms & Conditions</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="last-box">
          <Link to="#">&copy; Copyright 2023 Job Connect</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
