const setItemToLocalStorage = (toDoName, toDoItem) => {
    localStorage.setItem(toDoName, JSON.stringify(toDoItem))
  }

  const getItemFromLocalStorage = (toDoName) => {
    return JSON.parse(localStorage.getItem(toDoName)).value
  }

  const removeFromLocalStorage = (toDoName) => {
    localStorage.removeItem(toDoName)
  }

  export { setItemToLocalStorage, getItemFromLocalStorage, removeFromLocalStorage }