import React from 'react';
import web from './image/web.png'

const Home = () => {
    return (
        <div className="d-flex align-items-center" id="header">


            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 pt-5 order-2 order-lg-1 leftText">
                                <h2 >Grow Your Knowledge with<strong className="brandName">LearnMore</strong></h2>
                                <h3 className=" my-3">We are giving opportunities to Develop your Lerning Skill</h3>
                                <div >
                                    <a className="btn btn-primary" href="">
                                        Get Started
                                    </a>

                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-lg-2 justify-content-center">
                                <img src={web} className="img-fluid imageMove" alt="image" />
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;
