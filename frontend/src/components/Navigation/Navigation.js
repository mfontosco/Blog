import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useNavigate}  from 'react-router-dom'
import styles from './Navigation.module.css'
import { logoutUserAction } from '../../Redux/Actions/UsersActions'
import Button from '../Button/Button'

const Navigation = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo} = useSelector((state)=>state.loginUser)
const logoutHandler =()=>{
    dispatch(logoutUserAction())
    navigate("/login")
    window.location.reload()
}
  return (
    <div className={styles.container}>
<div className={styles.blogs}>
<Link to='/blogs'>Home</Link>
<Link to='/createBlog'>Add Post</Link>
<Link to='/'>About</Link>
<Link to='/createCategory'>Categories</Link>
</div>
{userInfo ? (<div className={styles.Login}>
<Link to='/register'>Dashboard</Link>
<Link to='' onClick={logoutHandler}>Logout</Link>
</div>):<div className={styles.Login}>
<Link to='/login' >Login</Link>
</div>}

    </div>
  )
}

export default Navigation