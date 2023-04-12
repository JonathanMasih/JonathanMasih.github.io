import React from 'react'
import './contactpage.css'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
function Contactpage() {
    return (
        <div className='contactpage-container' id='contact'>
            <h2 className='contactpage-header'>
                <div className='contactpage-hr' ></div>
                <span>Get in touch</span>
                <div className='contactpage-hr' ></div>
            </h2>
            <div className='contactpage-tagline-container'>
                <p className='contactpage-tagline'>
                    I am currently looking for Full-time opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back
                    you!
                </p>
            </div>
            <a target="_blank" href="mailto:JonathanMasih42@Gmail.com" >
                <button className='contactpage-button'>Say Hello</button>
            </a>
            <div className='contactpage-links-container'>
                <div className='contact-icon-linkedin'>
                    <a target="_blank" href='https://www.linkedin.com/in/jonathanmasih/'>
                        <RiLinkedinBoxLine size={27} color=' #66fcf1' />
                    </a>
                </div>
                <div className='contact-icon-email'>
                    <a target="_blank" href="mailto:JonathanMasih42@Gmail.com" >
                        <AiOutlineMail size={27} color=' #66fcf1' />
                    </a>
                </div>
                <div className='contact-icon-github'>
                    <a target="_blank" href="https://github.com/jonathanmasih">
                        <AiFillGithub size={27} color=' #66fcf1' />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Contactpage