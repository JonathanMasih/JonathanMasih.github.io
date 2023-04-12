import React from 'react'
import './about.css'

const outdoorsImage1 = require("../../assets/images/outdoor-picture1.JPG");
const outdoorsImage2 = require("../../assets/images/outdoor-picture2.jpg");

function About() {
    return (
        <div className='about-container' id='about'>
            <h2 className='about-header'>
                <div className='about-hr' ></div>
                <span>Get to Know Me</span>
                <div className='about-hr' ></div>
            </h2>
            <div className='about-bio-container'>
                <div className='about-bio-container-image'>
                    <img className='about-bio-image' src={outdoorsImage1} alt="Image of Jonathan Masih after a hike" />
                    <img className='about-bio-image2' src={outdoorsImage2} alt="Image of Jonathan Masih after a hike" />
                </div>
                <div className='about-bio-paragraphs'>
                    <p className='about-bio'>
                        I am a senior at Siena College majoring in Computer Science. I have a passion for full-stack development and
                        have gained valuable experience through several internships in the field. During my time at Siena, I have
                        developed a strong foundation in programming languages such as&nbsp;<span className='about-skills'>Java, and JavaScript</span>.&nbsp;
                        Additionally, I have experience in front-end technologies like&nbsp;<span className='about-skills'>HTML, CSS, Angular, React, and TypeScript</span>.&nbsp;
                        as well as back-end technologies such as&nbsp; <span className='about-skills'>Spring and SQL databases</span>.&nbsp;
                        As a developer, I love to learn and solve complex problems. I am always eager to take on new challenges and push myself to improve my skills.
                    </p>
                    <p className='about-bio'>
                        In my previous internships, I had the opportunity to work on projects such as building web applications. These experiences have taught me the
                        importance of teamwork, communication, and attention to detail in delivering high-quality software products.
                        When I'm not coding, I enjoy playing sports and spending time outdoors. I also volunteer in my local church,
                        which has been a rewarding experience for me. I am excited about the opportunity to continue learning and
                        growing as a developer, and I am looking forward to exploring new opportunities in the field. If you would
                        like to learn more about my experience or have any questions, please feel free to get in touch with me.
                    </p>

                </div>
            </div>
        </div >
    )
}

export default About