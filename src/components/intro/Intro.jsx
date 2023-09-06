import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="me" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+10</small>
            </article>
          </div>
          <h2>Hi ! im Amin Salimi</h2>
          <p>computer science (software) student at Azad University<br />Web developer (front-End) with more than 2 years of experience</p>
          <h1>Work at Companies :</h1>
          <ul className='CompName'>
            <li>Meta-Rang</li>
            <li>Nobati</li>
            <li>Chekida</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Intro