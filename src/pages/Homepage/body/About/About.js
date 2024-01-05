import React from 'react'
import "./About.css";
import PhotoFrame from '../../../../components/PhotoFrame/PhotoFrame';
import photoPath from './images/about-photo.webp';
import Button from '../../../../components/Button/Button';
import { AboutDescription, AboutSubtitle, ratingsData } from './AboutData';
import Ratings from '../../../../components/Ratings/Ratings';

const About = () => {
  return (
    <section className='about'>
      <div className='about-text-container'>
        <h3 className='about-title'>About</h3>
        <p className='about-subtitle'>{AboutSubtitle}</p>
      </div>
      <div className='about-photo-description'>
        <div className='about-photo'>
          <PhotoFrame imagePath={photoPath} />
        </div>
        <p className='about-description'>{AboutDescription}</p>
      </div>
      <div className='about-ratings'>
        <Ratings ratingsData={ratingsData} />
      </div>
      <div className='about-button'>
        <Button label="Know More" />
      </div>
    </section>
  )
}

export default About;
