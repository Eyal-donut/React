import classes from './Form.module.css'
import React, { useRef, useEffect } from 'react'

const Form = ({onFormSubmit, value}) => {
    const inputRef = useRef(null)

    const inputHandler = (e) => {
        inputRef.current = e.target.value
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputRef.current, 'form, line 13')
        onFormSubmit(inputRef.current)
        

    }

    useEffect(()=> {
        inputRef.current.focus()

    }, [])



    return (
        <>
            <h1>To Do List</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor="todo">Add Todo</label>
                <input className={classes.input} ref={inputRef} onChange={inputHandler} value={value}></input>
                <button type="submit">Add</button>
        </form>
        </>
    )
}

export default Form