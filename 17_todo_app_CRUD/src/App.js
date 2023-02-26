import "./App.css";
import Form from "./Form";
import React, { useState, useEffect, useRef } from "react";
import ListItem from "./ListItem";

const App = () => {
  const [todoArray, setTodoArray] = useState(()=>{
    const localStorageTodoArray = localStorage.getItem("localStorageTodoArray");
    if (localStorageTodoArray) {
      return (JSON.parse(localStorageTodoArray));
    } else return []
  });

  useEffect(() => {
     localStorage.setItem("localStorageTodoArray", JSON.stringify(todoArray));
  }, [todoArray]);


  const formSubmitHandler = (arg) => {
    if (arg.value.length > 0) {
      setTodoArray((todoArray) => [...todoArray, arg]);
    }
  };

  const statusHandler = (arg) => {
    const identifier = arg.getAttribute("identifier");
    const clickedTodo = todoArray.find((todo)=> String(todo.id) === identifier)
    clickedTodo.isDone = !clickedTodo.isDone
    setTodoArray((todoArray)=> [...todoArray])
  };
  
  
  const deleteItemsHandler = (arg, todoItemClassList) => {
    todoItemClassList.add("delete");
    const identifier = arg.getAttribute("identifier");
    console.log(identifier)
    setTodoArray((todoArray)=> todoArray.filter((todo)=> String(todo.id) !== identifier))
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
              onDeleteItems={deleteItemsHandler}
            />
          );
        })}
      </ul>
    </>
  );
};
export default App;
