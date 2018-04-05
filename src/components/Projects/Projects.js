import React, { Component } from 'react';
import Iframe from 'react-iframe';

import { ButtonGroup, Button } from 'react-bootstrap';

import OtherProjects from '../OtherProjects/OtherProjects';

import { PROJECTS, PROJECT_URLS, PROJECT_GITHUB, PROJECT_NOTES, PROJECT_THANKS } from '../constants/index';

import './Projects.css';

class Projects extends Component {
    
    activeProject(test, clicked) {
        if (test === clicked) {
            window.history.pushState(this.props.projects, '', 'projects/' + test);
            return true;
        } else return false;
    }
    
    render(){
        return(
            <div>
                <ButtonGroup>
                    { // iterate through available PROJECTS
                      // pass clicked PROJECT to onClick() passed in props
                      // mark clicked PROJECT as active
                        PROJECTS
                            .map((project, i) => {
                                
                            let handleClick = this.props.onClick.bind(this, project);
                            let testProject = this.activeProject(project, this.props.projects[this.props.projects.length - 1]);
                                
                            return(
                                <Button key={i} onClick={handleClick} active={ testProject ? true : false } >
                                    { project }
                                </Button>
                        )})}
                </ButtonGroup>
                
                {  this.props.projects[this.props.projects.length - 1] !== 'Other Projects' &&
                <div>
                    <Iframe url= { PROJECT_URLS[PROJECTS.indexOf(this.props.projects[this.props.projects.length - 1])] }
                        width="100%"
                        height="500px"
                        id="project"
                        className="projectFrame"
                        display="initial"
                        position="relative" />
                    <p>
                        { PROJECT_NOTES[PROJECTS.indexOf(this.props.projects[this.props.projects.length - 1])] }
                    <br />
                    Special thanks for the following assets! <br />
                        <ul>
                            { 
                                PROJECT_THANKS[PROJECTS.indexOf(this.props.projects[this.props.projects.length - 1])]
                                    .map((thank, i) => {
                                        let temp = thank.split(',');
                                        return(
                                            <li>
                                                <a href={temp[1]}>{temp[0]}</a>
                                            </li>
                                    )})
                            }
                        </ul>
                    </p>
                    
                    <ButtonGroup>
                        <Button href={PROJECT_GITHUB[PROJECTS.indexOf(this.props.projects[this.props.projects.length - 1])]}>
                            GitHub
                        </Button>
                        <Button href={PROJECT_URLS[PROJECTS.indexOf(this.props.projects[this.props.projects.length - 1])]}> 
                            Full Screen
                        </Button>
                    </ButtonGroup>
                </div>
                }
                { this.props.projects[this.props.projects.length - 1] === 'Other Projects' && <OtherProjects /> }
            </div>
        );
    }
} export default Projects;