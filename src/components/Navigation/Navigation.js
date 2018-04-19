import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Row, Navbar, Nav, NavItem, Image } from 'react-bootstrap';
         
import Content from '../Content.js';

import { PAGES } from '../constants/index';

import './Navigation.css';

class Navigation extends Component {
    
    // bind this to functions
    //  - allows functions to access props
    constructor(props) {
        super(props);
        this.manageHistory = this.manageHistory.bind(this);
        this.fakeRefresh = this.fakeRefresh.bind(this);
    }
    
    // Test if a given page is the active page
    activePage(test, clicked) {
        if (test === clicked) {
            // update url with the active page
            window.history.pushState(this.props.pages, '', '/' + test.replace(/\s+/g, ''));
            return true;
        } else return false;
    }
    
    // When user navigates forward or backward in browser history
    // treat it as clicking a link and make that the active page
    manageHistory(e) {
        let path = document.location.pathname.substr(1);
        this.props.onClick(path);
    }
    
    // *!!!* Not working *!!!*
    // Prevent default refresh, which sends user to either a 404 or to the About Me page
    // Reload component based on active page
    fakeRefresh(e) {
        e.preventDefault();
        let page = this.props.pages[this.props.pages.length - 1];
        this.props.onClick("GO_BACK");
        this.props.onClick(page);
    }
    
    // add listeners
    componentDidMount() {
        window.addEventListener("popstate", this.manageHistory);
        window.addEventListener("onbeforeunload", this.fakeRefresh);
    }
    
    render(){
        return(
            <div>
                <Row>
                    <Navbar staticTop collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Image src="assets/images/house.png" rounded onClick={ this.props.onClick.bind(this, 'About Me') }/>
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