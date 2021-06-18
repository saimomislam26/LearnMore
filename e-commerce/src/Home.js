import React from 'react';
import img from './image/img.png'
import Common from './Common';

const Home = () => {
    return (
        <Common name="Develop Your Knowledge With" btn_name="Get Started" visit="/Service" img_src={img} />
    );
}

export default Home;
