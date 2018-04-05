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
                        <h3>I hope you enjoy my collection of projects and the portfolio itself.<br />
                            Not all projects could be ran here due to hosting limitations.<br />
                            Now, for a little about me that you won't find on my resume!
                        </h3>
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
                                                most notable capabilities being covers of Little Mermaid's 'Under the Sea', Ray Charles' 'Hit the Road Jack', and the Beatles 'For No One'.
                                            </Panel.Body>
                                        </Panel.Collapse>
                                    </Panel>
                                    <Panel id="gardening" >
                                        <Panel.Heading>
                                            <Panel.Title toggle>
                                                Gardening
                                            </Panel.Title>
                                        </Panel.Heading>
                                        <Panel.Collapse>
                                            <Panel.Body>
                                                This has always been a hobby of mine, but I'm only just beginning to look into larger scale operations and incorporating computers to automate processes.
                                                Traditonally, I have grown tomatoes and peppers seasonally (2 plants each) in my backyard using pots and soil. However, I have recently become enamored with aquaponics
                                                and have been designing a system to build for that agriculutral method (see my smart aquaponics project below).
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
                                                However, I hope to build a 3D scanner soon which will alleviate my reliance on others publishing free models for me to use.
                                                The video below is of me printing a small Xun, which is a Chinese ocarina. I still have not learned to play it.
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
                                                I have been programming since high school, starting with creating games and simple websites.  In 2009, some classmates and myself entered the Global Game Jam and won with our game, 
                                                'Boxy & Foxy: Business as Usual'. This success garnered the attention of Bethesda Softworks where we were invited for a tour of their studios.  
                                                In addition to programming, I also work on my cars and enjoy the mechanical side of life.
                                                Because of this, I am very interested in automation and the moving parts being controlled by software I can write.
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
                                                Since it is soil-less, it can be implemented in cities and other areas where there are food deserts.  This is a big reason why I am interested in researching ways to create an automated system
                                                connected to various sensors that allows for minimal human interference.  
                                                Since a well established ecosystem will require little input beyond fish food, and the collection/transplanting of vegetables/plants,
                                                many systems can be handled by an experienced professional or perhaps an inexperienced professional could manage their own sustainable garden.
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
                                                The mixing cup is held on a rail below the liquor bottles that runs parallel.  There will be a web application to allow the user to inform the robot which liquor bottles are in which slot,
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
                        <img id="selfie" alt="Alex House" src="/images/alexhouse.jpg" height="120px"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
} export default AboutMe;