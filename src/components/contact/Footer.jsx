import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      {/* <a href="#home" className="footer__logo">Amin salimi</a> */}
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Amin-Sl" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/salimii_amin?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <h2>+98 9369129148</h2>
      <h3>aminsalimi@gmail.com</h3>
      <div className="footer__copyright">
      </div>
    </footer>
  )
}

export default Footer
