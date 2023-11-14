import React from 'react'
import Project from './project/project'
import './projects.css'

const profileImage = require("../../assets/images/gpt-3-picture.png");
const profileImage2 = require("../../assets/images/gpt-3-picture2.png");

const profileImage3 = require("../../assets/images/EmployeManagement-picture1.png");
const profileImage4 = require("../../assets/images/EmployeManagement-picture2.png");

const profileImage5 = require("../../assets/images/spaceinvaders-pictrue.png");
const profileImage6 = require("../../assets/images/spaceinvaders-pictrue2.png");


const profileImage8 = require("../../assets/images/chirp-pic1.PNG");
const profileImage9 = require("../../assets/images/chirp-pic2.PNG");


function Projects() {
    return (
        <div className='projects-container' id='projects'>
            <h1 className='projects-header'>
                <div className='projects-hr' ></div>
                <span>My Work</span>
                <div className='projects-hr' ></div>
            </h1>
            <div className='projects-cards'>
                <Project
                    projectLink={'https://chrip-snowy.vercel.app/'}
                    projectName={'Chirp'}
                    image={profileImage8}npm
                    image2={profileImage9}
                    projectDes={'Twitter-like clone,users make posts using emojis.'}
                    projectLan={'Nextjs, Prisma(DB), React, Typescript, HTML, TailwindCSS'} />
                <Project
                    projectLink={'https://github.com/JonathanMasih/ReactApplication'}
                    projectName={'Gpt-3 Challenge'}
                    image={profileImage}
                    image2={profileImage2}
                    projectDes={'Fully Responsive Modern UI/UX Website in React JS. '}
                    projectLan={'React, HTML, CSS'} />
                <Project
                    projectLink={'https://github.com/JonathanMasih/EmployeeManagement'}
                    projectName={'EmployeeManagement'}
                    image={profileImage3}
                    image2={profileImage4}
                    projectDes={'Basic api with CRUD operations with a Frontend.'}
                    projectLan={'React, HTML, CSS, REST API, Java Spring'} />
                <Project
                    projectLink={'https://github.com/JonathanMasih/SpaceInvadersBr'}
                    projectName={'SpaceInvaders'}
                    image={profileImage5}
                    image2={profileImage6}
                    projectDes={'Single and Muitiplayer SpaceInvaders Pc version.'}
                    projectLan={'Java, Swing'} />
            </div>
        </div>
    )
}

export default Projects