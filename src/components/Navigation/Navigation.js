import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Row, Navbar, Nav, NavItem, Image } from 'react-bootstrap';
         
import Content from '../Content.js';

import { PAGES } from '../constants/index';

import './Navigation.css';

class Navigation extends Component {
    
    activePage(test, clicked) {
        if (test === clicked) {
            window.history.pushState(this.props.pages, '', '/' + test);
            return true;
        } else return false;
    }
    
    render(){
        return(
            <div>
                <Row>
                    <Navbar staticTop collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Image src="assets/images/house.png" rounded />
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                        <Nav>
                            { /* iterate through available PAGES                /
                              / pass clicked PAGE to onClick() passed in props  /
                              / mark clicked PAGE as active                    */
                                PAGES
                                .map((page, i) => {
                                    let handleClick = this.props.onClick.bind(this, page);
                                    let testPage = this.activePage(page, this.props.pages[this.props.pages.length - 1]);
                                    return(
                                        <NavItem id={page.replace(/\s+/g, '')} key={i} onClick={handleClick}
                                        className = { testPage ? 'active' : '' } >
                                            {page}
                                        </NavItem>
                            )})}
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
                <Row>
                    <div className="content">
                        { /* get active page from state and send to child component Content */ }
                        <Content page={ this.props.pages[this.props.pages.length - 1] } />
                    </div>
                </Row>
            </div>
        );
    }
}

export default Navigation;