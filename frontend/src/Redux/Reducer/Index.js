import {combineReducers} from 'redux'
import {createUserReducer,loginUserReducer} from './UserReducer'
import { getAllPostReducer,getSinglePostReducer,createPostReducer,updatePostReducer,deletePostReducer } from './PostReducer';
import { createCategoryReducer, getAllCategoriesReducer } from './CategoryReducer';

const rootReducer = combineReducers({
    createUser:createUserReducer,
    loginUser:loginUserReducer,
    getPosts:getAllPostReducer,
    getPost:getSinglePostReducer,
    createPost:createPostReducer,
    updatePost:updatePostReducer,
    deletePost:deletePostReducer,
    createCategory:createCategoryReducer,
    getCategories:getAllCategoriesReducer
})

export default rootReducer;