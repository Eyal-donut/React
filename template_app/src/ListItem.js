import classes from './ListItem.module.css'
import { removeFromLocalStorage } from './ManageLocalStorage'

const ListItem =({todo, deleteTargetRef}) => {

    const clickHandler = (e) => {
        e.target.classList.toggle('done')
    }
    const deleteHandler = (e) => {
        e.target.parentElement.classList.add('delete')
        removeFromLocalStorage(todo)
    }

    return (
        <div className='todo-wrapper' ref={deleteTargetRef}>
            <div className="todo-status" onClick={clickHandler}></div>
            <p className={classes.p}>{todo}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default ListItem