import wpOptionsReducer from './wpOptionsReducer';
import postsReducer from './postsReducer';
import pagesReducer from './pagesReducer';
import casesReducer from './casesReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  options: wpOptionsReducer,
  post: postsReducer,
  page: pagesReducer,
  cases: casesReducer
});