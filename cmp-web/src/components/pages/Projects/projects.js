import React from 'react';
import classes from './projects.module.css';
import {Link} from 'react-router-dom';
function projects() {
    return (
        <div className={classes.projectscontainer}>
            <h1>My Projects</h1>
            <h2 className={classes.h2}>Collection Of My Projects</h2>
            <br/>
            <div className={classes.row}>
                <div className={classes.projects}>
                    <h3><strong>This E-commerce site is still under development.</strong></h3>
                         <ul>
                            <li>Used React as Front End Design</li>
                            <li>For state management I have used Redux</li>
                            <li>For storage i have used localStroge service</li>
                        </ul>
                        <Link to={{pathname:"https://stackoverflow.com/questions/42914666/react-router-external-link"}} target="_blank"><button>GitHub</button></Link>
                        <button>Live Demo</button>
                </div>
            <div className={classes.projects}>
                <h3><strong>Simple Todo Apps developed with React, React Hooks and Redux</strong></h3>
                <ul>
                    <li>Used React as Front End Design</li>
                    <li>For state management I have used Redux</li>
                    <li>For storage i have used localStroge service</li>
                </ul>
                <button>GitHub</button>
                <button>Live Demo</button>
            </div>
            <div className={classes.projects}>
                <h3><strong>Simple To DO App</strong></h3>
                <ul>
                    <li>Used React as Front End Design</li>
                    <li>For state management I have used Redux</li>
                    <li>For storage i have used localStroge service</li>
                </ul>
                <button>GitHub</button>
                <button>Live Demo</button>
            </div>
            </div>
        </div>
    )
}

export default projects
