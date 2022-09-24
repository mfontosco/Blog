import {
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_RESET,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_RESET,
} from "../constants/CategoryConstants";

const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true };
    case CREATE_CATEGORY_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case CREATE_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

const getAllCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return { loading: true };
    case GET_CATEGORY_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case GET_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    case GET_CATEGORY_RESET:
      return {};
    default:
      return state;
  }
};

export {createCategoryReducer,getAllCategoriesReducer}