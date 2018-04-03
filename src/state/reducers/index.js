import { combineReducers } from 'redux';

import pages from './pages';
import projects from './projects';

const rootReducer = combineReducers({
  pages,
  projects
});

export default rootReducer;