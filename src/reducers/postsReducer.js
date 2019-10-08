import {
  GET_POSTS,
  GET_POST,
  POST_LOADING
} from '../types';

const initialPostsState = {
  posts: [],
  post: [],
  pageLoading: false
};

export default function(state = initialPostsState, action) {
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
        post: action.payload[0],
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