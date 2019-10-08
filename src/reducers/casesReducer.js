import {
  GET_CASES,
  CASES_LOADING
} from '../types';

const initialCasesState = {
  modalOpen: false,
  cases: [],
  filteredCases: [],
  casesLoading: true
};

export default function(state = initialCasesState, action) {
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