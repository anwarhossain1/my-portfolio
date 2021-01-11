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
                    JavaScript Development - architecting and building web/mobile applications with React, React Hooks, Redux and JavaScript/TypeScript.
                    </li>
                    <li>
                    Responsive Design - adapting and optimizing web pages to work on all screen sizes (mobile and tablet devices).
                    </li>
                    <li>
                        PSD To Web applications - conversion capability for attractive user interfaces. 
                    </li>
                </ul>
            </div>
            <div className={classes.techno}>
                <h1>Technologies I Used Most</h1>
                <ul>
                    <li><img src="https://www.flaticon.com/svg/static/icons/svg/919/919851.svg"  /><strong>React</strong></li>
                    <li> <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png"  />Redux</li>
                    <li> <img src="data:image/png;base64,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"  />CommerceJS</li>
                    <li> <img src="https://www.flaticon.com/svg/static/icons/svg/919/919825.svg"  />NodeJS</li>
                    <li> <img src="https://www.flaticon.com/svg/static/icons/svg/541/541509.svg"  />JavaScript</li>
                    <li> <img src="https://www.flaticon.com/svg/static/icons/svg/919/919832.svg"  />TypeScript</li>
                    <li> <img src="https://www.flaticon.com/svg/static/icons/svg/919/919827.svg"  />HTML5</li>
                    <li> <img src="https://www.flaticon.com/svg/static/icons/svg/919/919826.svg"  />CSS3</li>
                    <li> <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-social.png"  />Bootstrap</li>
                    <li> <img src="https://as1.ftcdn.net/jpg/00/61/63/68/500_F_61636887_9XnC5xEVVQeozSweJky2HM65Nu0ekcek.jpg"  />Jquery</li>

                </ul>
            </div>
            <div className={classes.communicate}>
                <h1>Get In Touch</h1>
                <h3>If You Have Any Problem Ragarding Any Project<br/>Feel free to reach out to me!</h3>
                <button>Contact Me</button>
                <button>My Portfolio</button>



            </div>

            
            
        </div>
    )
}

export default Aboutme;
