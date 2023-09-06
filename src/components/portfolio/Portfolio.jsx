import React from 'react';
import IMG1 from '../../assets/GH.jpg';
import IMG2 from '../../assets/WA.jpg';
import IMG3 from '../../assets/SS.jpg';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/Digdooni.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'GymmHomee',
      img: IMG1,
      description:
        'GymmHomee is a Website for exercize at home and gym',
      technologies: 'React js',
      link: 'https://gymmhomee.ir',
      github: '',
    },
    {
      id: 2,
      title: 'Weather App',
      img: IMG2,
      description:
        'You can check weather situation in this application',
      technologies: 'React js',
      link: 'https://weather-onlinee.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 4,
      title: 'Shoes Store',
      img: IMG3,
      description:
        'Store shop ; Fully responsive ',
      technologies: 'React | Redux',
      link: 'https://shoes-storee.netlify.app/home',
      github: 'https://github.com/Amin-Sl/Shoes-store',
    },
    {
      id: 6,
      title: 'Digdooni',
      img: IMG6,
      description:
        'Digdooni is a app for making food with your existing Foodstuffs in your house',
      technologies: 'React js | tailwind | RTK',
    },
  ];

  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github?
                 <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> :''}
              {pro.link?
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>:<h2 className='warn'>working...</h2>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
