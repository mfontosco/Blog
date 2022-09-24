import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "../constants/UserConstants";
import axios from "axios";

const baseUrl = "http://localhost:4000";

const logoutUserAction =()=>(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({type:LOGOUT_USER})
}

const createUserActions = (fullName, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_USER_REQUEST,
    });
    const config = {
      headers:{"content-type": "application/json"}
    };
    const { data } =await axios.post(
      `${baseUrl}/api/v1/users/register`,
      { fullName, email, password },
      config
    );
    console.log(data)
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.user,
    });
  } catch (err) {
    console.log(err.message)
    let message =err.response && err.response.data.message ? err.response.data.message :err.message
    dispatch({
   type:CREATE_USER_FAIL,
   payload:message
    })
  }
};

const loginUserActions = (email,password)=>async(dispatch)=>{
    try{
     dispatch({type:LOGIN_USER_REQUEST})
     const config ={
  headers:{"content-type":"application/json"}
     }
     const {data} =await axios.post(`${baseUrl}/api/v1/users/login`,{email,password},config)
     console.log(data)
     dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:data.user
     })
     localStorage.setItem("userInfo",JSON.stringify(data.user))
    }catch(err){
  console.log(err)
  let message = err.response && err.response.data.message ? err.response.data.message :err.message
  dispatch({
type:LOGIN_USER_FAIL,
payload:message
  })
    }
}

export {createUserActions,
    loginUserActions,
    logoutUserAction}