import React, { Component } from 'react';

import MiniNav from '../MiniNav/MiniNav.js';

import { NAMES } from './constants.js';

class Portfolio extends Component {
    
    render() {
        return(
            <div>
                <MiniNav pages={ NAMES } tag='portfolio' match={ this.props.match } />
            </div>
        )}
}

export default Portfolio;