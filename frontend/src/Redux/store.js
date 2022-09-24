import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Reducer/Index'

const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV ==='development'){
    devTools =composeWithDevTools(applyMiddleware(...middleware))
}else{
    devTools=applyMiddleware(...middleware)
}

const userInfoFromLocalStorage =localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
    loginUser:{userInfo:userInfoFromLocalStorage}
}

const store = createStore(rootReducer,initialState,devTools)

export default store;