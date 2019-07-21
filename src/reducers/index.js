import { combineReducers } from 'redux';
import {
  GET_MAIN_MENU,
  MENU_LOADING,
  GET_WP_OPTIONS,
  WP_OPTIONS_LOADING,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  GET_PAGE,
  PAGE_LOADING,
  GET_CASES,
  CASES_LOADING,
  GET_SKILLS,
  SKILLS_LOADING
} from '../types';

const initialNavState = {
  items: [],
  menuLoading: true
};

const menusReducer = (state = initialNavState, action) => {
  switch (action.type) {
    case GET_MAIN_MENU:
      return {
        ...state,
        items: action.payload,
        menuLoading: false
      };
    case MENU_LOADING:
      return {
        ...state,
        menuLoading: true 
      };    
    default: 
      return state;
  }
};

const initialWPOptionsState = {
  options: {},
  optionsLoading: true
};

const wpOptionsReducer = (state = initialWPOptionsState, action) => {
  switch (action.type) {
    case GET_WP_OPTIONS:
      return {
        ...state,
        options: Object.assign(state.options, action.payload),
        optionsLoading: false
      };
    case WP_OPTIONS_LOADING:
      return {
        ...state,
        optionsLoading: true
      };    
    default: 
      return state;
  }
};

const initialPostsState = {
  posts: [],
  post: [],
  pageLoading: false
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };   
    default:
      return state;
  }
};

const initialPagesState = {
  page: {},
  pageLoading: true
};

const pagesReducer = (state = initialPagesState, action) => {
  switch (action.type) {
    case GET_PAGE:
      return {
        ...state,
        page: action.payload,
        pageLoading: false
      };
    case PAGE_LOADING:
      return {
        ...state,
        pageLoading: true
      };  
    default:
      return state;
  }
};

const initialCasesState = {
  modalOpen: false,
  cases: [],
  filteredCases: [],
  casesLoading: true
};

const casesReducer = (state = initialCasesState, action) => {
  switch (action.type) {
    case GET_CASES:
      return {
        ...state,
        cases: action.payload,
        casesLoading: false
      };
    case CASES_LOADING:
      return {
        ...state,
        casesLoading: true
      };  
    default:
      return state;
  }
};

const initialSkillsState = {
  skills: [],
  filteredSkills: [],
  skillsLoading: true
};

const skillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        skillsLoading: false
      };
    case SKILLS_LOADING:
      return {
        ...state,
        skillsLoading: true
      };
    default:
      return state;
  }
};

export default combineReducers({
  menus: menusReducer,
  options: wpOptionsReducer,
  post: postsReducer,
  page: pagesReducer,
  cases: casesReducer,
  skills: skillsReducer
});