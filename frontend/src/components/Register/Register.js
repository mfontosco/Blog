import React,{useState} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './Register.module.css'
import InputLabel from '../InputLabel/InputLabel'
import { useDispatch} from 'react-redux'
import {createUserActions} from '../../Redux/Actions/UsersActions'
// import Message from '../Message/Message'
import {  useNavigate,Link } from 'react-router-dom'

const Register = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const[state,setState] = useState({
        fullName:"",
        email:"",
        password:""
    })
    // const {error,loading,success,user} = useSelector((state)=>state.createUser)
    
    const onChangeHandler =(e)=>{
        const {name,value} =e.target
        setState({...state,[name]:value})
    }
    const submitHandler =(e)=>{
 e.preventDefault()
 const {fullName,email,password} = state
 if(!fullName || !email || !password){
    alert("Fill all form field")
    return
 }
dispatch(createUserActions(fullName,email,password))
setState({
    fullName:"",
    email:"",
    password:""
})
setTimeout(()=>{
    Navigate("/login")
},1000)

    }
    
  return (
    <div className={styles.container}>
    
        <form>
        <h2> Registration Form</h2>
            <div className={styles.formGroup}>
            <InputLabel text="UserName"/>
                <Input
                className={styles.input}
                inputPropreties={{
                    type:'text',
                    name:"fullName",
                    placeholder:"Username",
                    value:state.fullName,
                   onChange:onChangeHandler
                }}
                   
                />
            </div>
            <div className={styles.formGroup}>
            <InputLabel text="Email"/>
                <Input
                className={styles.input}
                inputPropreties={{
                    type:'email',
                    name:"email",
                    placeholder:"please enter your email",
                    value:state.email,
                   onChange:onChangeHandler
                }}
                   
                />
            </div>
            <div className={styles.formGroup}>
            <InputLabel text="Password"/>
                <Input
                className={styles.input}
                inputPropreties={{
                    type:'password',
                    name:"password",
                    placeholder:"please enter your password",
                    value:state.password,
                   onChange:onChangeHandler
                }}  
                />
            </div>
            <Button text='Register' className={styles.btn} onClick={submitHandler}/>
            <div className={styles.terms}><p>By clicking on the register button,you have agreed to our terms and conditions</p></div>
            <Link to="login">Login</Link>
        </form>
      
    </div>
  )
}

export default Register