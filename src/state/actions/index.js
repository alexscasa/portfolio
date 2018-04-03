import * as actions from '../constants/action-types.js';

// Go to next page
// Parameters: String page (next page to render)
export const nextPage = (page) => ({ 
    type: actions.NEXT_PAGE, 
    page 
});

// Go to previous page
export const previousPage = () => ({
    type: actions.PREVIOUS_PAGE
});

// Go to next project
// Parameters: String project (next project to render)
export const nextProject = (project) => ({
    type: actions.NEXT_PROJECT, 
    project
});

// Go to previous project
export const previousProject = () => ({
    type: actions.PREVIOUS_PROJECT
});

export const renderProject = () => ({
    type: actions.RENDER_PROJECT
});