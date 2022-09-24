import React, { useState } from "react";
import styles from "./Form.module.css";
import InputLabel from "../../InputLabel/InputLabel";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import { useDispatch,  } from "react-redux";
import { createCategoryAction } from "../../../Redux/Actions/CategoryActions";
// import { CREATE_CATEGORY_RESET } from "../../../Redux/constants/CategoryConstants";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // const { success } = useSelector((state) => state.createCategory);
 

  const onChangeHandler = (e) => {
    const { value } = e.target;
    console.log(value)
    setName(value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("name",name)
    dispatch(createCategoryAction(name));
    setName('')
  };
  return (
    <div className={styles.container}>
      <form>
        <h2>Create Category</h2>

        <div className={styles.formGroup}>
        
          <Input
            className={styles.input}
            inputPropreties={{
              type: "text",
              name: "name",
              placeholder: "please enter your name",
              value: name,
              onChange: onChangeHandler,
            }}
          />
        </div>
        <Button text="login" className={styles.btn} onClick={submitHandler} />
      </form>
    </div>
  );
};

export default Form;
