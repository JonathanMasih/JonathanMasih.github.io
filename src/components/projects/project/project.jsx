import React from 'react'
import './project.css'

function Project(props) {
    return (
        <a class='project-link' target="_blank" href={props.projectLink}>
            <div className='project-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={props.image} alt="image" />
                    <img className='project-image2' src={props.image2} alt="image" />
                </div>
                <h3 className='project-header'>
                    <span>{props.projectName}</span>
                </h3>
                <p className='project-des'>
                    {props.projectDes}
                    <span className='project-lan'>
                        {props.projectLan}
                    </span>
                </p>
            </div>
        </a>
    )
}

export default Project