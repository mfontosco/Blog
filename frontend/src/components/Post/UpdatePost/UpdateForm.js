import React, { useEffect, useState } from "react";
import styles from "./UpdateForm.module.css";
import Input from "../../Input/Input";
import InputLabel from "../../InputLabel/InputLabel";
import Button from "../../Button/Button";
import {
  getSinglePostAction,
  updateSinglePost,
} from "../../../Redux/Actions/PostActions"
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_POST_RESET } from "../../../Redux/constants/PostConstants";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { post } = useSelector((state) => state.getPost);
  const { success } = useSelector((state) => state.updatePost);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    if (success) {
        dispatch({ type: UPDATE_POST_RESET });
        navigate("/blogs");
      }
    if (id) {
      dispatch(getSinglePostAction(id));
    }
    
  }, [success, dispatch, navigate, id]);

  useEffect(() => {
    if (post) {
      setTitle(post ? post.title : "");
      setDescription(post ? post.description :"");
    //   setImage(post ? post.image : "");
    }
  }, [post]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateSinglePost(id, title,description,image));
  };
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.formGroup}>
          <InputLabel text="Title" />
          <Input
            className={styles.input}
            inputPropreties={{
              type: "text",
              placeholder: "title",
              value: title,
              onChange: (e) => setTitle(e.target.value),
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <InputLabel text="Photo" />
          <Input
            className={styles.input}
            inputPropreties={{
              type: "file",
              accept: "image/png,image/jpeg",
              value: image,
              onChange: (e) => setImage(e.target.value),
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <InputLabel text="Decsription" />
          <textarea
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <Button text="submit" className={styles.btn} onClick={submitHandler} />
      </form>
    </div>
  );
};

export default UpdateForm;
