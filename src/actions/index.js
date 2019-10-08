import {
  API_BASE,
  MAIN_MENU_API_BASE,
  POSTS_API_BASE,
  PAGES_API_BASE,
  WP_OPTIONS_API_BASE,
  CASES_API_BASE,
  SKILLS_API_BASE
} from '../constants';
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
import axios from 'axios';

export const getMainMenu = () => dispatch => {
  dispatch(setMenuLoading());
  axios
    .get(MAIN_MENU_API_BASE)
    .then(res =>
      dispatch({
        type: GET_MAIN_MENU,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MAIN_MENU,
        payload: err
      })
    )
};

export const getWPOptions = () => dispatch => {
  dispatch(setOptionsLoading());
  axios
    .get(WP_OPTIONS_API_BASE)
    .then(res =>
      dispatch({
        type: GET_WP_OPTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_WP_OPTIONS,
        payload: err
      })
    )
};

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`${API_BASE}/${POSTS_API_BASE}?per_page=100`)
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: err
      })
    );
};

export const getPost = slug => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`${API_BASE}/${POSTS_API_BASE}?slug=/${slug}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: err
      })
    );
};

export const getPage = slug => dispatch => {
  dispatch(setPageLoading());
  axios
    .get(`${API_BASE}/${PAGES_API_BASE}?slug=${slug}`)
    .then(res =>
      dispatch({
        type: GET_PAGE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PAGE,
        payload: err
      })
    );
};

export const getCases = () => dispatch => {
  dispatch(setCasesLoading());
  axios
    .get(`${API_BASE}/${CASES_API_BASE}?per_page=100&_embed=1`)
    .then(res =>
      dispatch({
        type: GET_CASES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CASES,
        payload: err
      })
    );
};

export const getSkills = () => dispatch => {
  dispatch(setSkillsLoading());
  axios
    .get(`${API_BASE}/${SKILLS_API_BASE}?per_page=100&_embed=1`)
    .then(res =>
      dispatch({
        type: GET_SKILLS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SKILLS,
        payload: err
      })
    );
};

export const setMenuLoading = () => {
  return {
    type: MENU_LOADING
  };
};

export const setOptionsLoading = () => {
  return {
    type: WP_OPTIONS_LOADING
  };
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const setPageLoading = () => {
  return {
    type: PAGE_LOADING
  };
};

export const setCasesLoading = () => {
  return {
    type: CASES_LOADING
  };
};

export const setSkillsLoading = () => {
  return {
    type: SKILLS_LOADING
  };
};