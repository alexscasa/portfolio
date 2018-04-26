import React, { Component } from 'react';

import { Panel, Button } from 'react-bootstrap';

import { OTHER_PROJECTS, OTHER_NOTES, OTHER_THANKS, OTHER_PROJECTS_GITHUB } from '../constants/index';

import './OtherProjects.css';

class OtherProjects extends Component {
    
    githubButton(link) {
            if (link !== '') {
                return(   
                    <Button href={ link } target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Button>
                );
            }
    }
    
    render() {
        return(
            <div id="others">
            {
                OTHER_PROJECTS
                    .map((project, i) => {
                        
                        let githubButton = this.githubButton(OTHER_PROJECTS_GITHUB[i]);
                    
                        return(
                            <Panel id={project} key={project} defaultExpanded>
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        {project}
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        <p>{OTHER_NOTES[i]}</p>
                                        <p>{OTHER_THANKS[i]}</p>
                                        { githubButton }
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                    )})
            }
            </div>
        );
    }
} export default OtherProjects;