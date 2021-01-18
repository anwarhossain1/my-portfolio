import React from 'react';
import classes from './projects.module.css';
import {Link} from 'react-router-dom';
function projects() {
    return (
        <div className={classes.projectscontainer}>
            <h1>Collection Of My Projects</h1>
            <br/>
            <div className={classes.row}>
                <div className={classes.projects}>
                    <h3><strong>This E-commerce site is still under development.</strong></h3>
                    <p>This is an ecomerrce site i have built it as a practice project. I have used some frameworks to complete it like ReactJS, NodeJS. Also used some Api's
                        like CommerceJS, Stripe etc. I beleive after completing this website, this e-commerce site will be fully fuctional.

                    </p>
                         <ul>
                            <li>Used React as Front End Design</li>
                            <li>For state management I have used Redux</li>
                            <li>For storage i have used localStroge service</li>
                        </ul>
                        
                        <Link to={{pathname:"https://github.com/anwarhossain1/react-ecommerce-prac"}} target="_blank"><button>GitHub</button></Link>
                        <Link to={{pathname:"https://react-prac.netlify.app"}} target="_blank"><button>Live Demo</button></Link>
                        
                </div>
            <div className={classes.projects}>
                <h3><strong>Simple Todo Apps developed with React, React Hooks and Redux</strong></h3>
                <ul>
                    <li>Used React as Front End Design</li>
                    <li>For state management I have used Redux</li>
                    <li>For storage i have used localStroge service</li>
                </ul>
                <Link to={{pathname:"https://github.com/anwarhossain1/todolist.github.io"}} target="_blank"><button>GitHub</button></Link>
                <Link to={{pathname:"https://todolistq6.netlify.app/"}} target="_blank"><button>Live Demo</button></Link>
            </div>
            <div className={classes.projects}>
                <h3><strong>Burger-khabo.com</strong></h3>
                <p>This is a simple e-commerce type website from where user can build their burger's based on their
                    choices and also order them.</p>
                <ul>
                    <li>Used React as Front End Design</li>
                    <li>For state management I have used Redux</li>
                    <li>For storage i have used Firebase services</li>
                </ul>
                <Link to={{pathname:"https://github.com/anwarhossain1/burger-khabo"}} target="_blank"><button>GitHub</button></Link>
                        <Link to={{pathname:"https://burger-khabo.netlify.app/"}} target="_blank"><button>Live Demo</button></Link>
            </div>
            </div>
        </div>
    )
}

export default projects
