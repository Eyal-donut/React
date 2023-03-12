import classes from './ListItem.module.css'

const ListItem =({todo, onStatusClick, identifier, onDeleteItems, isDone}) => {

    const clickHandler = (e) => {
        onStatusClick(e.target.parentElement, e.target.className)
    }
    const deleteHandler = (e) => {
        onDeleteItems(e.target.parentElement, e.target.parentElement.classList)
    }

    return (
        <div className='todo-wrapper' identifier={identifier}>
            <div className={isDone ? 'done' : 'not-done' } onClick={clickHandler} isDone={isDone}></div>
            <p className={classes.p}>{todo}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default ListItem