import {
  GET_SKILLS,
  SKILLS_LOADING
} from '../types';

const initialSkillsState = {
  skills: [],
  filteredSkills: [],
  skillsLoading: true
};

export default function(state = initialSkillsState, action) {
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