import React, { Component } from 'react';

import { Panel, Button } from 'react-bootstrap';

import { OTHER_PROJECTS, OTHER_NOTES, OTHER_THANKS, OTHER_PROJECTS_GITHUB } from '../constants/index';

import './OtherProjects.css';

class OtherProjects extends Component {
    render() {
        return(
            <div id="others">
            {
                OTHER_PROJECTS
                    .map((project, i) => {
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
                                        {
                                            <Button href={ OTHER_PROJECTS_GITHUB[i] } target="_blank" rel="noopener noreferrer">
                                                { OTHER_PROJECTS_GITHUB[i] === '' ? 'Not on Github' : 'GitHub' }
                                            </Button>
                                        }
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                    )})
            }
            </div>
        );
    }
} export default OtherProjects;