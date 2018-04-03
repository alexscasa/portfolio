import { NEXT_PROJECT, PREVIOUS_PROJECT } from '../constants/action-types.js';

// Create project state to control project access flow
// Default state: Pirate Game
// Parameters: state[] of application, and action to dispatch
const projects = (state = ['Pirate Game'], action) => {
    switch(action.type) {
        // if moving to next project
        case NEXT_PROJECT:
            // return an array containing the previous visited projects
            // and the next project to visit
            return [...state, action.project];
        // if moving to previous project
        case PREVIOUS_PROJECT:
            // return an array containing previous projects visited 
            // minus the most recently visited
            return [...state.slice(0, state.length - 1)];
        default:
            return state;
    }
}; export default projects;