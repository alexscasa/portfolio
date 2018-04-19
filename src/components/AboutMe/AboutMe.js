import React, { Component } from 'react';

import { Grid, Row, Col, Panel} from 'react-bootstrap';

import './AboutMe.css';

class AboutMe extends Component {
    render(){
        return(
            <Grid id="content">
                <Row>
                    <Col md={12}>
                        <h2>Hello and thank you for visiting my portfolio!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h3>I hope you enjoy my collection of projects.<br />
                            Not all projects could be ran here due to hosting limitations.<br />
                            Check out my <a href="https://github.com/alexscasa" target="_blank" rel="noopener noreferrer">GitHub</a> for my other projects!
                        </h3>
                        <h3>Now, for a little about me that you won't find on my resume!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Panel id="hobbies">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    Hobbies
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <Panel id="musicing" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                Music
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                I've always had a passion for music.  I have been listening to vinyl since I was a child, with my preference leaning towards Blues and Jazz but an avid lover of almost all music.
                                                I have been playing guitar mediocrely since high school and its a hobby I continue to this day.  I enjoy playing fingerstyle guitar with my
                                                most notable capabilities being covers of Little Mermaid's 'Under the Sea', Ray Charles' 'Hit the Road Jack', and the Beatles' 'For No One'.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                    <Panel id="printing" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                3D Printing
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                This is a new hobby of mine, and I have yet to get to the point where I can make my own models.  
                                                However, I hope to build a 3D scanner soon which will alleviate some of my reliance on others publishing free models for me to use.
                                                The video below is of me printing a small Chinese aerophone, similar to an ocarina, called a Xun.<br /> I still have not learned to play it. <br />
                                                <video controls muted>
                                                    <source src="assets/videos/3DPrinter.mp4" type="video/mp4" />
                                                    <source src="assets/videos/3DPrinter.ogg" type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                    <Panel id="tinkering" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                General Tinkering
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                I have been programming since high school, starting with creating games and simple websites.  In 2009, some classmates and myself entered the Global Game Jam competition and won with our game, 
                                                'Boxy & Foxy: Business as Usual'. This garnered the attention of Bethesda Softworks where we were invited for a tour of their studios.  
                                                In addition to programming, I also enjoy the mechanical side of life, often finding myself working on cars during the weekend.
                                                Because of this, I am very interested in automation and the hardware side of system development which sparked an interest in Arduino and RaspberryPi microcontrollers.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel id="tomrrowprojects">
                            <Panel.Heading>
                                <Panel.Title toggle>
                                    Projects of Tomorrow
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <Panel id="turntable" >
                                            <Panel.Heading>
                                            <Panel.Title toggle>
                                                Remote-Controlled Turntable
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                I have quite an extensive vinyl collection and often find myself wishing to be able to repeat a side of an album or perhaps play a specific song with little effort.
                                                My vision to accomplish is a linear actuator that pushes the turntable arm to the desired lenth to play an album, either at a specific track number or at the start. 
                                                The linear actuator will be custom made through trial and error and will also be able to pull the arm back into its resting position.  To locate the desired track position, a sensor
                                                will need to be used that is able to detect the depth difference of the start groove for a song and the rest of the song itself.  I've looked into sonar sensors for this purpose, but am doubtful
                                                of their ability to track such a small indentation.  There will also be features to automatically turn on/off the turntable as well as raise/lower the arm.  The remote will send signals to an infrared
                                                sensor connected to a microcontroller that begins the process of completing the desired action.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                    <Panel id="aquaponics" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                Smart Aquaponics
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                Aquaponics is an agricultural process that involves the raising of fish to use their waste as nutrition for the plants growing in the system.  
                                                This system is a closed-water system and after the proper bacteria has developed to process the fish waste, it becomes a very efficient and green alternative to traditional farming.
                                                Since it is soil-less, it can be implemented in areas that are typically deemed food deserts.  This is a big reason why I am interested in researching ways to create an automated system
                                                connected to various sensors that allows for minimal human interference.  
                                                Since a well established ecosystem will require little input beyond fish food, and the harvesting/transplanting of vegetables/plants,
                                                the system should require little input and maintenance when finetuned.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                    <Panel id="bartender" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                Automated Bartender
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                This is an idea that was sparked from other DIYers who have completed similar robots.  
                                                I am not much of a drinker, but I do believe this would just be fun to have around when entertaining friends and family.
                                                The idea typically revolves around a rail with liquor bottles suspended on it upside down.  The liquor bottles have valves on them that will only be opened when needed.
                                                The mixing cup is held on a rail below the liquor bottles that runs parallel.  There will be a web application to allow the user to inform the robot which liquor bottles are in which holding compartment,
                                                and based on this information the user will be able to access a repository of recipes based on their attached ingredients.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <img id="selfie" alt="Alex House" src="assets/images/alexhouse.jpg" height="120px"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
} export default AboutMe;