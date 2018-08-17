import React from 'react';

import MiniNav from '../MiniNav/MiniNav.js';

import * as RESUMES from './constants.js';

class Resumes extends React.Component {
    render() {
        return(
            <div>
                <MiniNav pages={ RESUMES.CATEGORIES } tag="resumes" match={ this.props.match } />
            </div>
        )}
}

export default Resumes;