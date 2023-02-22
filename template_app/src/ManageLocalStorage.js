const setItemToLocalStorage = (todoIdentifier, todoItem) => {
  localStorage.setItem(todoIdentifier, JSON.stringify(todoItem));
};

const getItemFromLocalStorage = (todoIdentifier) => {
  return JSON.parse(localStorage.getItem(todoIdentifier));
};

const removeFromLocalStorage = (todoIdentifier) => {
  localStorage.removeItem(todoIdentifier);
};

const toggleIsDone = (todoIdentifier) => {
  const todoItem = getItemFromLocalStorage(todoIdentifier);
  removeFromLocalStorage(todoIdentifier);
  todoItem.isDone === false
    ? (todoItem.isDone = true)
    : (todoItem.isDone = false);
  setItemToLocalStorage(todoItem.id, todoItem);
};

export {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  removeFromLocalStorage,
  toggleIsDone,
};
