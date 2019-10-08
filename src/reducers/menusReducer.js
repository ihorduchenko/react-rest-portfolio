import {
  GET_MAIN_MENU,
  MENU_LOADING
} from '../types';

const initialNavState = {
  items: [],
  menuLoading: true
};

export default function(state = initialNavState, action) {
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