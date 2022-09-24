import { CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    GET_CATEGORY_REQUEST,
GET_CATEGORY_FAIL,
GET_CATEGORY_SUCCESS } from "../constants/CategoryConstants";
    import axios from 'axios'


    
    const baseUrl ='http://localhost:4000'
    const createCategoryAction =(name)=>async(dispatch)=>{
     try{
        dispatch({type:CREATE_CATEGORY_REQUEST})
        const config ={
            headers:{
                "content-type":"application/json"
            }
        }
 console.log(name)
        const {data} = await axios.post(`${baseUrl}/api/v1/category/`,{name:name},config)
        console.log(data)
        dispatch({
            type:CREATE_CATEGORY_SUCCESS,
            payload:data.category
        })
     }catch(err){
        console.log(err)
        let message =err.response && err.response.data.err ? err.response.data.err :err.message
       console.log(message)
        dispatch({
            type:CREATE_CATEGORY_FAIL,
            error:message
        })
     }

    }

    const getAllCategoryAction =()=>async(dispatch)=>{
        try {
            dispatch({type:GET_CATEGORY_REQUEST})
            const config = {
                headers :{
                    "content-type":"application/json"
                }
            }
            const {data} =await axios.get(`${baseUrl}/api/v1/category`,config)
            console.log(data)
            dispatch({
                type:GET_CATEGORY_SUCCESS,
                payload:data.categories
            })
        } catch (err) {
            console.log(err)
            let message = err.response && err.response.data.message ? err.response.data.message :err.message
            dispatch({
                type:GET_CATEGORY_FAIL,
                payload:message
            })
        }
    }
    export {createCategoryAction,getAllCategoryAction}