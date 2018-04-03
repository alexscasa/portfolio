import { NEXT_PAGE, PREVIOUS_PAGE } from '../constants/action-types.js';

export default function pages(state = ['AboutMe'], action) {
  switch (action.type) {
      // if moving to next page
      case NEXT_PAGE:
        // return an array containing the previous visited pages
        // and the next page to visit
        return [...state, action.page];
      // if moving to previous page
      case PREVIOUS_PAGE:
        // return an array containing previous pages visited, 
        // minus the most recently visited
        return [...state.slice(0, state.length - 1)];
      default:
        return state;
  }
}