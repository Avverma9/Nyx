import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className= "all">
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo_details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">X- LEDGER</span>
            </div>
            <div className="media_icons">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/a_n_k_u_s_h_r_a_i">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ankush-rai222/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="link_boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="/homepage">Home</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/blog">Get started</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="/">App design</a>
              </li>
              <li>
                <a href="/">Web design</a>
              </li>
              <li>
                <a href="/">Logo design</a>
              </li>
              <li>
                <a href="/">Banner design</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">My account</a>
              </li>
              <li>
                <a href="/">Prefrences</a>
              </li>
              <li>
                <a href="/">Purchase</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Courses</li>
              <li>
                <a href="/">HTML & CSS</a>
              </li>
              <li>
                <a href="/">JavaScript</a>
              </li>
              <li>
                <a href="/">Photography</a>
              </li>
              <li>
                <a href="/">Photoshop</a>
              </li>
            </ul>
            <ul className="input_box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom_details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2023 <a href="/">X Ledger.</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="/">Privacy policy</a>
              <a href="/">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;