import React from 'react';
import './home.css'

const profileImage = require("../../assets/images/profile-picture1.jpg");

function Home() {
    return (
        <div className='home-container' id='home'>
            <div className="home-content">
                <div className='home-greeting-name-container'>
                    <h1 className='home-greeting-name'>
                        <span >
                            Hello, I am Jonathan Masih
                        </span>
                    </h1>
                </div>
                <div className='home-name-image'>
                    <img className='home-image-one' src={profileImage} alt="Picture of Jonathan Masih" />
                </div>
                <h2 className='home-occupation'>Software Developer</h2>
                <div className='home-tagline-container'>
                    <p className='home-tagline'>Creating dynamic web applications with passion and precision. &nbsp;
                        <a href="#about" className="home-learn-more">Learn More</a>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Home