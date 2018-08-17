import React from 'react';

import { HYPE } from './constants.js';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                        highlight: HYPE[0],
                        index: 0,
                        animation: 'fade-in'
                     };
    }
    
    componentDidMount() {
        this.highlightId = setInterval(
            ()=> this.changeHighlight(), 3000);
        this.animateId = setInterval(
            () => this.changeAnimation(), 1500);
    }
    
    componentWillUnmount() {
        clearInterval(this.highlightId);
    }
    
    changeHighlight() {
        if(this.state.index === HYPE.length - 1) {
            this.setState({
                highlight: HYPE[0],
                index: 0
            });
        } else {
            this.setState({
                highlight: HYPE[this.state.index + 1],
                index: this.state.index + 1
            });
        }
    }
    
    changeAnimation() {
        if(this.state.animation === 'fade-in') {
            this.setState({
                animation: 'fade-out'
            });
        } else this.setState({
            animation: 'fade-in'
        });
    }
    
    render() {
        return(
            <div className="content">
                <div className={ this.state.animation }>
                   <h1>{ this.state.highlight }</h1>
                </div>
            </div>
        )}
}

export default Home;