import React from 'react';
import classes from './Aboutme.module.css';
const Aboutme = () => {
    return (
        <div className={classes.aboutme__container}>
            <div className={classes.aboutme}>
            <h1>About Me</h1>
            <p><img src="https://www.flaticon.com/svg/static/icons/svg/1688/1688502.svg"/>
            Hi, I am Anwar Hossain, an Front-end Web Developer, programmer and ReactJS enthusiast. I am from Dhaka, Bangladesh.
            </p>
            <p><img src="https://www.flaticon.com/premium-icon/icons/svg/1988/1988187.svg"/>
            I am a 24 years old JavaScript developer, currently enriching my knowledge and skills in ReactJS and NodeJS.
            </p>
            <p><img src="https://www.flaticon.com/svg/static/icons/svg/3424/3424742.svg"/>
            I have obtained my Bachelor of Science degree in Computer Science & Engineering (CSE) from University of Asia Pacific in Dhaka, Bangladesh.
            </p>
            <p><img src="https://www.flaticon.com/svg/static/icons/svg/1688/1688502.svg"/>
            I am a 24 years old JavaScript developer, currently enriching my knowledge and skills in ReactJS and NodeJS.
            </p>
            <p><img src="https://www.flaticon.com/svg/static/icons/svg/1688/1688502.svg"/>
            I am a 24 years old JavaScript developer, currently enriching my knowledge and skills in ReactJS and NodeJS.
            </p>

            </div>
            <div className={classes.skills}>
                <h1>Skills</h1>
                <h2>Front End Development</h2>
                <ul>
                    <li>
                    JavaScript Development - architecting and building web/mobile applications with Angular, React, Ionic, JavaScript/TypeScript.
                    </li>
                    <li>
                    Responsive Design - adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices).
                    </li>
                </ul>
            </div>
            <div>
                <h1>Technologies I Used Most</h1>
            </div>

            
            
        </div>
    )
}

export default Aboutme;
