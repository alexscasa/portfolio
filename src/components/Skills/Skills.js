import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { HYPE } from '../Home/constants.js';
import { SKILLS } from './constants.js';

import './Skills.css';

class Skills extends Component {
    render() {
        return(
            <div className="content">
            <Grid>
            <Row className='row-eq-height'>
                {
                    HYPE
                    .map((category, i) => {
                        return(
                        <Col sm={4}>
                        <div className="category">
                            <Panel defaultExpanded>
                                <Panel.Heading>
                                    <Panel.Title toggle>
                                        { category }
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <Panel.Body>
                                        <ul className="skills">
                                            {
                                                SKILLS[i]
                                                .map((skill, i) => {
                                                    return(
                                                        <li>{ skill }</li> 
                                                )})
                                            }
                                        </ul>
                                    </Panel.Body>
                                </Panel.Collapse>
                            </Panel>
                        </div>
                        </Col>
                    );})
                }
            </Row>
            </Grid>
            </div>
        )}
}

export default Skills;