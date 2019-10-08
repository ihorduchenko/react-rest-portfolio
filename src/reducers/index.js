import menusReducer from './menusReducer';
import wpOptionsReducer from './wpOptionsReducer';
import postsReducer from './postsReducer';
import pagesReducer from './pagesReducer';
import casesReducer from './casesReducer';
import skillsReducer from './skillsReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  menus: menusReducer,
  options: wpOptionsReducer,
  post: postsReducer,
  page: pagesReducer,
  cases: casesReducer,
  skills: skillsReducer
});