import Wrapper from "./Helpers/Wrapper"
import React, { useState } from "react"

const Form = ({onSavedDetails}) => {
    const formInputs = [
        {   id: 1,
            labelText: "First Name: ",
        inputType: "text",
        inputName: "firstName",
    },
        {   id: 2,
            labelText: "Last Name: ",
        inputType: "text",
        inputName: "lastName",
    },
    ]

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState("12-18")
    const [textArea, setTextArea] = useState('')

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }
    const ageHandler = (e) => {
        setAge(e.target.value)
    }
    const textAreaHandler = (e) => {
        setTextArea(e.target.value)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        const filledDetails = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            textArea: textArea,
        }
        console.log("num1",filledDetails)
        
        onSavedDetails(filledDetails)

        setFirstName('')
        setLastName('')
        setAge('')
        setTextArea('')
    }
    
    return (
        <Wrapper>
            <form onSubmit= {submitHandler}>
                <label for="firstName">First Name: </label>
                <input {...formInputs[0]} value= {firstName} onChange = {firstNameHandler}></input>
                <label for="lastName">Last Name: </label>
                <input {...formInputs[1]} value= {lastName} onChange = {lastNameHandler} ></input>
                <label for="select">Age: </label>
                <select name="Age" value= {age}  onClick = {ageHandler}>
                    <option value={"12-18"}>12-18</option>
                    <option value={"19-27"} >19-27</option>
                    <option value={"28-120"} >28-120</option>
                </select>
                <label for="textarea">Free Text: </label>
                <textarea name="textarea" value= {textArea} onChange={textAreaHandler}></textarea>
                <input className="submit" type="submit" value="Submit"></input>
            </form>
        </Wrapper>
    )
}

export default Form
