import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_POSTS_RESET,
  GET_POST_RESET,
  UPDATE_POST_RESET,
  DELETE_POST_RESET,
  CREATE_POST_RESET,
} from "../constants/PostConstants";


const getAllPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { loading: true };
    case GET_POSTS_SUCCESS:
      return { loading: false, success: true, posts: action.payload };
    case GET_POSTS_FAIL:
      return { loading: false, error: action.payload };
    case GET_POSTS_RESET:
      return {};
    default:
      return state;
  }
};

const getSinglePostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return { loading: true };
    case GET_POST_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case GET_POST_FAIL:
      return { loading: false, error: action.payload };
    case GET_POST_RESET:
      return {};
    default:
      return state;
  }
};
const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { loading: true };
    case CREATE_POST_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case CREATE_POST_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_POST_RESET:
      return {};
    default:
      return state;
  }
};
const updatePostReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      return { loading: true };
    case UPDATE_POST_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case UPDATE_POST_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_POST_RESET:
      return {};
    default:
      return state;
  }
};
const deletePostReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return { loading: true };
    case DELETE_POST_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case DELETE_POST_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_POST_RESET:
      return {};
    default:
      return state;
  }
};

export {getAllPostReducer,getSinglePostReducer,createPostReducer,updatePostReducer,deletePostReducer}