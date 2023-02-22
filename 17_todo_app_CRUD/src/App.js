import "./App.css";
import Form from "./Form";
import React, { useState, useEffect, useRef } from "react";
import {
  getItemFromLocalStorage,
  removeFromLocalStorage,
  toggleIsDone,
  setItemToLocalStorage,
} from "./ManageLocalStorage";
import ListItem from "./ListItem";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);


  useEffect(() => {
    const localStorageTodoArray = localStorage.getItem("localStorageTodoArray");
    if (localStorageTodoArray) {
      setTodoArray(JSON.parse(localStorageTodoArray));
    }
  }, []);

  useEffect(() => {
   if(todoArray.length > 0) {
     localStorage.setItem("localStorageTodoArray", JSON.stringify(todoArray));
   }
   return 
  }, [todoArray]);


  const formSubmitHandler = (arg) => {
    if (arg.value.length > 0) {
      setTodoArray((todoArray) => [...todoArray, arg]);
    }
  };

  const statusHandler = (arg, todoItemClassList) => {
    todoItemClassList.toggle("done");
    const identifier = arg.getAttribute("identifier");
    const clickedTodo = todoArray.find((todo)=> todo.id === identifier)
    clickedTodo.isDone = !clickedTodo.isDone
    setTodoArray((todoArray)=> [...todoArray])
  };
  
  
  const deleteItemsHandler = (arg, todoItemClassList) => {
    todoItemClassList.add("delete");
    const identifier = arg.getAttribute("identifier");
    setTodoArray((todoArray)=> todoArray.filter((todo)=> todo.id !== identifier))
  };

  return (
    <>
      <Form onFormSubmit={formSubmitHandler} />
      <ul>
        {todoArray.map((todoItem) => {
          return (
            <ListItem
              key={todoItem.id}
              todo={todoItem.value}
              onStatusClick={statusHandler}
              identifier={todoItem.id}
              isDone={todoItem.isDone}
              statusclass={
                todoItem.isDone === false ? "not-done" : "not-done done"
              }
              onDeleteItems={deleteItemsHandler}
            />
          );
        })}
      </ul>
    </>
  );
};
export default App;
