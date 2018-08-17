import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

import Home from '../Home/Home.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Skills from '../Skills/Skills.js';
import Resumes from '../Resumes/Resumes.js';
import Contact from '../Contact/Contact.js';

import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return(
            <div className="Nav">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Link to="/">
                            <Navbar.Brand>
                                <Image src="assets/images/house.png" rounded/>
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem componentClass='span'>
                            <Link to="/resumes">Resumes</Link>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <Link to="/skills">Skills</Link>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem componentClass='span'>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/resumes" component={Resumes}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
    )}
}
export default Navigation;