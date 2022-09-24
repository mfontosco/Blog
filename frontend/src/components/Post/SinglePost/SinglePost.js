import React, { useEffect } from 'react'
import styles from './SinglePost.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,Link } from 'react-router-dom'
import { getSinglePostAction } from '../../../Redux/Actions/PostActions'
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Sidebar from '../Posts/SideBar/Sidebar'
const SinglePost = () => {
    const dispatch =useDispatch()
    const {id} = useParams()
    const {success,loading,post} =useSelector((state)=>state.getPost)

    useEffect(()=>{
        dispatch(getSinglePostAction(id))
    },[dispatch,id])
    const deleteHandler = ()=>{

    }
  return (
    <div className={styles.container}>
    {loading ? (<h2>Loading...</h2>):success && 
    <div className={styles.post}>
        <div><img src={post.image} alt="" /></div>
                  <h3 className={styles.title}>{post.title}</h3>
                  <h4 className={styles.date}>
                    {new Date(post.createdAt).toLocaleString()}
                  </h4>
                  <p className={styles.desc}>{(post.description)}</p>
                  <div className={styles.icons}>
                    <div>
                      <Link to={`/blog/${post._id}/edit`}>
                        <AiOutlineEdit />
                      </Link>
                      <MdOutlineDeleteOutline
                        onClick={() => deleteHandler(post._id)}
                      />
                    </div>
                    <Link to="/blogs">Go back to All blogs</Link>
        </div>
        </div>
        }
        <div className={styles.sidebar}>
<Sidebar/>
        </div>
    </div>
  )
}

export default SinglePost