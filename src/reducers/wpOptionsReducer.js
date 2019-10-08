import {
  GET_WP_OPTIONS,
  WP_OPTIONS_LOADING
} from './../types';

const initialWPOptionsState = {
  options: {},
  optionsLoading: true
};

export default function(state = initialWPOptionsState, action) {
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