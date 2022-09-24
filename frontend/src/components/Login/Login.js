import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import InputLabel from "../InputLabel/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { loginUserActions } from "../../Redux/Actions/UsersActions";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER_RESET } from "../../Redux/constants/UserConstants";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const {success} = useSelector((state)=>state.loginUser)
  useEffect(()=>{
if(success){
    dispatch({type:LOGIN_USER_RESET})
  
}
  },[success,Navigate,dispatch])
  // console.log(user.fullName)
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const {  email, password } = state;
    if ( !email || !password) {
      alert("Fill all form field");
      return;
    }
    dispatch(loginUserActions(email, password));
    setState({
      fullName: "",
      email: "",
      password: "",
    });
    Navigate('/blogs')
  };
  return (
    <div className={styles.container}>
      <form>
        <h2> Login Form</h2>

        <div className={styles.formGroup}>
          <InputLabel text="Email" />
          <Input
            className={styles.input}
            inputPropreties={{
              type: "email",
              name: "email",
              placeholder: "please enter your email",
              value: state.email,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <InputLabel text="Password" />
          <Input
            className={styles.input}
            inputPropreties={{
              type: "password",
              name: "password",
              placeholder: "please enter your password",
              value: state.password,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <Link to="/register">Register</Link>
        <Button
          text="login"
          className={styles.btn}
          onClick={submitHandler}
        />
        <div className={styles.terms}>
          {/* <p>
            By clicking on the register button,you have agreed to our terms and
            conditions
          </p> */}
        </div>
      </form>
      {/* {user.fullName ? <p>{user.fullName}</p>:null} */}
    </div>
  );
};

export default Login;
