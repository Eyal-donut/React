import classes from "./ListItem.module.css";

const ListItem = ({
  todo,
  onStatusClick,
  identifier,
  statusclass,
  onDeleteItems,
}) => {
  const clickHandler = (e) => {
    onStatusClick(e.target.parentElement, e.target.classList);
  };
  const deleteHandler = (e) => {
    onDeleteItems(e.target.parentElement, e.target.parentElement.classList);
  };

  return (
    <div
      className="todo-wrapper"
      identifier={identifier}
      statusclass={statusclass}
    >
      <div className={statusclass} onClick={clickHandler} ></div>
      <p className={classes.p}>{todo}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};
export default ListItem;
