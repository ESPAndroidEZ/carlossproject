import React from "react";
import InstagramIcon from "./insta.jpg";
import FacebookIcon from "./facebook.jpg";
import LinkedIn from './linkedin.jpg';
import "./App.css";
import GMAIL from './gmail.png';

function Footer() {
  return (
    <div className="Footer">
       <div className="App-logo2">
       <a href="https://www.linkedin.com/in/carlos-georgiev/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="social-media" />
              </a>
              <a href="https://www.instagram.com/carlos_kamenov/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/carloskamenov" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="mailto:carloskamenov@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={GMAIL} alt="Gmail" />
              </a>
              </div>
      <p className="footerz">&copy; 2023 carlosswebsite.com</p>
    </div>
  );
}

export default Footer;
