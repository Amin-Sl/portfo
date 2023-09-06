import React from 'react';
import { BsFillPatchCheckFill , BsCircleFill } from 'react-icons/bs';
import './experience.css';
import Skils from './data.js'
import Know from './dataa'

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="experience__frontend">
      <h2 className='title-S'>Skills :</h2>
          <div className="experience__content">
            {Skils.map((x) => (
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{x.title}</h4>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h2 className='title-S'>Having Knowladge About :</h2>
          <div className="experience__content">
          {Know.map((y) => (
            <article className="experience__details">

              <BsCircleFill className={`${y.rate==="top" ? 'iconT': '' || y.rate==="M" ? 'iconM' :'iconL' }`} />
              <h4>{y.title}</h4>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience