import { CREATE_POST_REQUEST,
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
    CREATE_POST_FAIL
} from "../constants/PostConstants"
import axios from 'axios'
import { logoutUserAction } from "./UsersActions"

const baseUrl ="http://localhost:4000"

const createPostActions =(title,description,image,category)=>async(dispatch,getState)=>{
 
   try{
    dispatch({
        type:CREATE_POST_REQUEST
    })
    const {loginUser:{userInfo}} =getState()
    const config ={
        headers:{
            "content-type":"application/json",
            "authorization":`Bearer ${userInfo.token}`
        }
    }
    console.log(category)
    const {data} = await axios.post(`${baseUrl}/api/v1/posts/create`,{title,description,image,category},config)
    console.log(data)
dispatch({
    type:CREATE_POST_SUCCESS,
    payload:data.post
})
   }catch(err){
console.log(err.message)
let message = err.response && err.response.data.message ?err.response.data.message :err.message
if(message === "Invalid token,Not Authorized" || /jwt/.test(message)){
    dispatch(logoutUserAction())
}
dispatch({
    type:CREATE_POST_FAIL,
    payload:message
})
   }

}

const getAllPostsAction =()=>async(dispatch)=>{
    try{
        dispatch({type:GET_POSTS_REQUEST})
        const config ={
            header:{
                "content-type":"application/json"
            } 
        }
        const {data} = await axios.get(`${baseUrl}/api/v1/posts`,config)
        console.log(data)
        dispatch({
            type:GET_POSTS_SUCCESS,
            payload:data.post
        })
    }catch(err){
console.log(err)
let message = err.response && err.response.data.message ? err.response.data.message :err.message
dispatch({
    type:GET_POSTS_FAIL,
    payload:message
})
    }
}

const getSinglePostAction =(id)=>async(dispatch)=>{
try{
    dispatch({type:GET_POST_REQUEST})
    const config = {
        headers:{
            "content-type":"application/json",
        } 
    }
    const {data} = await axios.get(`${baseUrl}/api/v1/posts/${id}`,config)
    dispatch({
        type:GET_POST_SUCCESS,
        payload:data.post
    })
}catch(err){
console.log(err)
let message = err.response && err.response.data.message ? err.response.data.message : err.message
dispatch({
type:GET_POST_FAIL,
payload:message
})
}
}


const updateSinglePost = (id,title,description,image)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_POST_REQUEST})
        const config ={
            headers:{
                "content-type":"application/json"
            } 
        }
        const {data} = await axios.put(`${baseUrl}/api/v1/posts/${id}`,{title,description,image},config)
        dispatch({
            type:UPDATE_POST_SUCCESS,
            payload:data.post
        })
    }catch(err){
let message =err.response && err.response.data.message ? err.response.data.message :err.message
dispatch({
    type:UPDATE_POST_FAIL,
    payload:message
})
}
}

const deletePostAction =(id)=>async(dispatch)=>{
try{
    dispatch({type:DELETE_POST_REQUEST})
    const config ={
        headers:{
            "content-type":"application/json"
        }
    }
    const {data} = await axios.delete(`${baseUrl}/api/v1/posts/${id}`,config)
    
    dispatch({
        type:DELETE_POST_SUCCESS,
        payload:data.message
    })
}catch(err){
let message =err.response && err.response.data.message ?err.response.data.message :err.message
dispatch({
    type:DELETE_POST_FAIL,
    payload:message
})
}
}

export {createPostActions,getAllPostsAction,getSinglePostAction,updateSinglePost,deletePostAction}