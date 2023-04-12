import React from 'react'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import './contact.css'
function Contact() {
    return (
        <div className='contact-container'>
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
    )
}

export default Contact