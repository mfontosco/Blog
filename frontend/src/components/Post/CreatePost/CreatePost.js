import React, { useEffect, useState } from "react";
import styles from "./CreatePost.module.css";
import InputLabel from "../../InputLabel/InputLabel";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { createPostActions } from "../../../Redux/Actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_POST_RESET } from "../../../Redux/constants/PostConstants";
import { useNavigate } from "react-router-dom";
import { getAllCategoryAction } from "../../../Redux/Actions/CategoryActions";
const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
    imageBse64EndCode: "",
    category: "",
  });

  const { success: categorySuccess, category } = useSelector(
    (state) => state.getCategories
  );
  const { success } = useSelector((state) => state.createPost);
  useEffect(() => {
    if (success) {
      dispatch({ type: CREATE_POST_RESET });
      navigate("/blogs");
    }
  }, [success, dispatch, navigate, categorySuccess]);
  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [dispatch]);

  console.log(category);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      const selectedFile = e.target.files[0];
      console.log("selected", selectedFile);
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        console.log(reader.result);
        setState({
          ...state,
          image: value,
          imageBse64EndCode: reader.result,
        });
      };
    }
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, description, imageBse64EndCode, category } = state;
    console.log(category);
    dispatch(
      createPostActions(title, description, imageBse64EndCode, category)
    );
    setState({
      title: "",
      description: "",
      image: "",
      imageBse64EndCode: "",
    });
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
              name: "title",
              placeholder: "title",
              value: state.title,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <select name="category" id="cars" onChange={onChangeHandler}>
            {category &&
              category.length > 0 &&
              category.map((cate, i) => (
                <option key={i} value={cate._id}>
                  {cate.name}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <InputLabel text="Photo" />
          <Input
            className={styles.input}
            inputPropreties={{
              type: "file",
              name: "image",
              accept: "image/png,image/jpeg",
              value: state.image,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <InputLabel text="Decsription" />
          <textarea
            value={state.description}
            name="description"
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <Button text="submit" className={styles.btn} onClick={submitHandler} />
      </form>
    </div>
  );
};

export default CreatePost;
