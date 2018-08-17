import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Iframe from 'react-iframe';

import * as PROJECTS from '../Portfolio/constants.js';

import './ProjectScreen.css';

class ProjectScreen extends React.Component {
    render() {
        const project = this.props.match.params.name;
        return(
            <div id="project">
                <Iframe url= { PROJECTS.URLS[project] }
                        width="100%"
                        height="500px"
                        id="project"
                        className="projectFrame"
                        display="initial"
                        position="relative" />
                <p>{ PROJECTS.NOTES[project] }</p>
                <p id="special">
                    { PROJECTS.THANKS[project] ? 'Special thanks to the following!' : ''}
                </p>
                <div id="thanks">
                    {
                        PROJECTS.THANKS[project] ? 
                        PROJECTS.THANKS[project].map((thank, i) => {
                            let temp = thank.split(',');
                            return(
                                <div key={i}>
                                    <a href={temp[1]} key={i} target="_blank" rel="noopener noreferrer">{temp[0]}</a>
                                    <br />
                                </div>
                        )}) : ''
                    }
                </div>
                <div id="buttons">
                    <ButtonGroup>
                        <Button href={PROJECTS.REPOS[project]} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Button>
                        <Button target="_blank" href={PROJECTS.URLS[project]}> 
                            Full Screen
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default ProjectScreen;