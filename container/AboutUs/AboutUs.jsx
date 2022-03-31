import React from 'react';
import images from '../../constants/images'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='g letter'></img>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img  src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="Knife img"/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img  src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
