import React, { useEffect } from "react";
import styles from "./Posts.module.css";
import {
  deletePostAction,
  getAllPostsAction,
} from "../../../Redux/Actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { DELETE_POST_RESET } from "../../../Redux/constants/PostConstants";
import Sidebar from "./SideBar/Sidebar";

const Posts = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.deletePost);
  const { posts ,error} = useSelector((state) => state.getPosts);

  useEffect(() => {
    if (success) {
      dispatch({ type: DELETE_POST_RESET });
      dispatch(getAllPostsAction());
    } else {
      dispatch(getAllPostsAction());
    }
  }, [dispatch, success]);
  const deleteHandler = (id) => {
    dispatch(deletePostAction(id));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.sectionCenter}>
        <div className={styles.blogs}>
          {posts && posts.length > 0
            ? posts.map((post, index) => (
                <div key={index} className={styles.post}>
                  <img src={post.image} alt="" />
                  <h3 className={styles.title}>{post.title}</h3>
                  <h4 className={styles.date}>
                    {new Date(post.createdAt).toLocaleString()}
                  </h4>
                  <p className={styles.desc}>{(post.description).trim().slice(0,100)}...</p>
                  <div className={styles.icons}>
                    <div>
                      <Link to={`/blog/${post._id}/edit`}>
                        <AiOutlineEdit />
                      </Link>
                      <MdOutlineDeleteOutline
                        onClick={() => deleteHandler(post._id)}
                      />
                    </div>
                    <Link to={`/blog/${post._id}/`}>View</Link>
                  </div>
                </div>
              ))
            : <h2>Something went wrong</h2>}
        </div>
       <Sidebar/>
      </div>
    </div>
  );
};

export default Posts;
