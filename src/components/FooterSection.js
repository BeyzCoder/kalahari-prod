import React from 'react'
import "../styles/FooterSection.css";
import Gallery from './Gallery';

import logo from "../assets/logo.png";
import insta from "../assets/insta.svg";

export default function FooterSection() {
  return (
    <div className="footer-section">
      <div className="row">
        <div className="information">
          <div className="address">
            <p>Unit 202-120</p>
            <p>2nd Ave N,</p>
            <p>Saskatoon, SK</p>
          </div>

          <div className="time-sched">
            <p>Weekdays: </p>
            <p>11:00 am - 11:00 pm</p>
            <p>Weeknds: </p>
            <p>11:00 am - 3:00 am</p>
          </div>
          
          <div className="social-media">
            <a href="https://www.instagram.com/kalaharisaskatoon/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="media" /></a>
          </div>

          <img src={logo} alt="logo" />
        </div>

        <Gallery />
      </div>

      <div className="row">
        <span>Copyright 2025 - Kalahari Social</span>
        <span>Web Designed By <a href="https://www.linkedin.com/in/steven-baes/" target="_blank" rel="noopener noreferrer">Steven Baes</a></span>
      </div>
    </div>
  )
}
