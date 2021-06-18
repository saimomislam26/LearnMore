import React from 'react';
import img from './image/img.png'
import Common from './Common.js';

const About = () => {
    return (
        <Common name="Welcome to About Page " btn_name="Get Contact" visit="/Contact" img_src={img} />
    );
}

export default About;
