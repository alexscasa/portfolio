import React from 'react';

import AboutMe from './AboutMe/AboutMe';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import ProjectLink from '../containers/ProjectLink';

export default function Content(page) {
    switch(page.page) {
            case 'About Me':
                return (<AboutMe />);
            case 'Portfolio':
                return <ProjectLink />;
            case 'Resume':
                return (<Resume />);
            case 'Contact':
                return <Contact />;
            default:
                return (<AboutMe />);
    }
}