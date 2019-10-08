import {
  GET_PAGE,
  PAGE_LOADING
} from '../types';

const initialPagesState = {
  page: {},
  pageLoading: true
};

export default function(state = initialPagesState, action) {
  switch (action.type) {
    case GET_PAGE:
      return {
        ...state,
        page: action.payload[0],
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