import React from 'react';
import './experience.css'

const InfoSpecs = (props) => {
    return (
        <div className="card-container">
            <div className="card-info">
                <div class="card-title"></div>
                <div className='info-container'>
                    <img
                        className='info-image'
                        src={props.Image}
                        width={190}
                        height={200} />
                    <div className='info-specs'>
                        <h3>{props.JobTitle}</h3>
                        <p>{props.JobLocation}</p>
                        <p>{props.JobTime}</p>
                        {
                            props.JobDsc.split('+').map((element) => {

                                return (
                                    <p>
                                        {element}
                                    </p>
                                )
                            })

                        }
                        <p >Tech Used:
                            &nbsp;<span className='info-skills'>  {props.JobTech}</span>&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


function Experience() {
    return (
        <>
            <div className='experience-container' id='experience'>
                <h1 className='experience-header'>
                    <div className='experience-hr' ></div>
                    <span>Career Road Map</span>
                    <div className='experience-hr' ></div>
                </h1>
                <div className='experience-roadmap-container'>
                    <div class="timeline">
                        <div class="outer">
                            <InfoSpecs
                                Image="https://www.mvphealthcare.com/-/media/project/mvp/healthcare/defaults
                                    /logo.svg?h=69&iar=0&w=150&rev=cd5ed57137d8489891b71e52e1ddcbd8&hash=BE81C639253CF54646862E0E04E397D6"
                                JobTitle="Agile Product Engineering Intern"
                                JobLocation="MVP Health Care"
                                JobTime="Jun 2022 - Aug 2022 · 3 mos"
                                JobDsc="• Collaborated with and across Agile Scrum team to design, develop, test,
                                implement, and support technical features/solutions. +
                               • Contributed to Scrum team ceremonies: sprint planning, standups, demos, and retrospectives."
                                JobTech="•Javascript •HTML •CSS •React •C# •.Net"
                            />
                            <InfoSpecs
                                Image="
                                https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FyCC1gom_2fHJ5AKO0L5BBBb7AFjGGnBWg&usqp=CAU
                                "
                                JobTitle="Product Owner/ Software Engineer"
                                JobLocation="WEL Social Media Startup"
                                JobTime="Sep 2022 - Apr 2023 · 8 mos"
                                JobDsc="• Provided oversight and hands-on contributions to the design, and development of web pages. +
                                • Communicated directly with client to clarify business needs and priorities. +
                                • Managed and prioritized the product backlog, Created acceptance criteria for backlog items."
                                JobTech="•Javascript •HTML •CSS •Angular •Java •Spring •Figma"
                            />
                            <InfoSpecs
                                Image="https://media.licdn.com/dms/image/C4D0BAQERjkKDyj41fg/company-logo_200_200/0/1631344918920?e=1707350400&v=beta&t=JhcoMdJpjJunXkg77Vdw4UbUWAQBvq4emQwNNW2rco0"
                                JobTitle="Student Intern (UI developer)"
                                JobTime="Sep 2022 - Aug 2023 · 1 yr"
                                JobDsc="• Developed custom web components using JavaScript, HTML, and CSS for an internal framework. 
                                        Such as a Date Picker On my github.+
                                • Partnered with managers to come up with the best possible technical solutions."
                                JobTech="•Javascript •HTML •CSS •Node.js •NPM"
                            />
                            <InfoSpecs
                                Image="https://media.licdn.com/dms/image/C4D0BAQERjkKDyj41fg/company-logo_200_200/0/1631344918920?e=1707350400&v=beta&t=JhcoMdJpjJunXkg77Vdw4UbUWAQBvq4emQwNNW2rco0"
                                JobTitle="ITS Spec 2(Frontend Developer)"
                                JobTime="Aug 2023 - Present · 4 mos"
                                JobDsc="• Helped maintain and update an internal JavaScript framework. +
                                • Enhanced and converted a Java application using industry-standard coding standards.+
                                • Integrated microservices, to allow CRUD operations in a Java application.+
                                "
                                JobTech="•Javascript •HTML •CSS •Node.js •Java •NPM "
                            />

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Experience