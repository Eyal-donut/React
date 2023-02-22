import "./App.css";
import Form from "./Form";
import React, {useState, useEffect, useRef} from "react";
import { getItemFromLocalStorage, setItemToLocalStorage } from "./ManageLocalStorage";
import ListItem from "./ListItem";

const App = () => {
  const [currentTodo, setCurrentTodo] = useState('')
  const [todoArray, setTodoArray] = useState([])

//add save classlist to local storage so you know if it was marked as done or not

  const formSubmitHandler = (todoValue) => {
    if (todoValue.length > 0) {
    setItemToLocalStorage(todoValue, {value: todoValue})
    setCurrentTodo(todoValue)
    }
  }

  useEffect(()=> {
    for (let i = 0; i < localStorage.length; i++){
      const todoItem = getItemFromLocalStorage(localStorage.key(i))
      console.log(todoItem)
      setTodoArray((prevArray)=> [...prevArray, todoItem])
    }
  },[])
  console.log(todoArray, 'line 25')

  return (
    <>
      <Form onFormSubmit={formSubmitHandler}/>
      <ul>
        {todoArray.map((todo) => 
        <ListItem 
        key={Math.random()}
        todo= {todo}
        >
        </ListItem>)}
        {currentTodo !== '' && <ListItem
        key={Math.random()}
        todo= {currentTodo}
        >
        </ListItem>}
      </ul>
    </>
  )
};
export default App;
