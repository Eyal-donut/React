import classes from "./Form.module.css";
import React, { useRef ,useState, useEffect } from "react";

const Form = ({ onFormSubmit }) => {
  const [todoText, setTodoText] = useState("")

   const inputRef = useRef(null);

  const inputHandler = (e) => {
    setTodoText(e.target.value);
    // inputRef.current = e.target.value
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputItem = {
      value: todoText,
      isDone: false,
      id: new Date(),
    };
    onFormSubmit(inputItem);
    setTodoText("")
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [todoText]);

  return (
    <>
      <h1>To Do List</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="todo">Add Todo</label>
        <input
          className={classes.input}
          ref={inputRef}
          onChange={inputHandler}
          value={todoText}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
