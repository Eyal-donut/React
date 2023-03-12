import "./App.css";
import Form from "./Form";
import React, { useState, useEffect, useRef, useReducer } from "react";
import ListItem from "./ListItem";

//I don't control the newTodoText state here, but if I would, that's how it would look with useReducer:

const reducer = (state, target) => {
  if (target.type === "SET_TODO_ARRAY") {
    return { todoArray: [...target.data], todoText: state.newTodoText };
  } else if (target.type === "SET_TODO_TEXT") {
    return { todoArray: state.todoArray, newTodoText: target.data };
  } else {
    return {
      todoArray: [],
      // () => {
      //   const localStorageTodoArray = localStorage.getItem(
      //     "localStorageTodoArray"
      //   );
      //   if (localStorageTodoArray) {
      //     return JSON.parse(localStorageTodoArray);
      //   } else return [];
      // },
      newTodoText: "",
    };
  }
};

const App = () => {
  // const [todoArray, setTodoArray] = useState(() => {
  //   const localStorageTodoArray = localStorage.getItem("localStorageTodoArray");
  //   if (localStorageTodoArray) {
  //     return JSON.parse(localStorageTodoArray);
  //   } else return [];
  // });
  const [todoState, dispatcher] = useReducer(reducer, {
    todoArray: [],
    // () => {
    //   const localStorageTodoArray = localStorage.getItem(
    //     "localStorageTodoArray"
    //   );
    //   if (localStorageTodoArray) {
    //     return JSON.parse(localStorageTodoArray);
    //   } else return [];
    // },
    newTodoText: "",
  });

  // useEffect(() => {
  //   localStorage.setItem(
  //     "localStorageTodoArray",
  //     JSON.stringify(todoState.todoArray)
  //   );
  // }, [todoState.todoArray]);

  const formSubmitHandler = (arg) => {
    if (arg.value.length > 0) {
      // setTodoArray((todoArray) => [...todoArray, arg]);
      dispatcher({
        type: "SET_TODO_ARRAY",
        data: [...todoState.todoArray, arg],
      });
    }
  };

  const statusHandler = (arg) => {
    const identifier = arg.getAttribute("identifier");
    const clickedTodo = todoState.todoArray.find(
      (todo) => String(todo.id) === identifier
    );
    clickedTodo.isDone = !clickedTodo.isDone;
    // setTodoArray((todoArray) => [...todoArray]);
    dispatcher({ type: "SET_TODO_ARRAY", data: [...todoState.todoArray, arg] });
  };

  const deleteItemsHandler = (arg, todoItemClassList) => {
    todoItemClassList.add("delete");
    const identifier = arg.getAttribute("identifier");
    console.log(identifier);
    // setTodoArray((todoArray) =>
    // todoArray.filter((todo) => String(todo.id) !== identifier)
    // );
    dispatcher({
      type: "SET_TODO_ARRAY",
      data: todoState.todoArray.filter(
        (todo) => String(todo.id) !== identifier
      ),
    });
  };

  return (
    <>
      <Form onFormSubmit={formSubmitHandler} />
      <ul>
        {todoState.todoArray.map((todoItem) => {
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
