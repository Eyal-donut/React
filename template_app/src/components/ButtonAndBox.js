import Wrapper from "./Helpers/Wrapper"
import React, { useState } from 'react'

const ButtonAndBox = () => {
    const [isDisplayed, setDisplay] = useState(true)

    const handleClick  = () => {
        setDisplay(!isDisplayed)
    }

    return (
        <Wrapper>
            <button onClick={handleClick}>Show/hide</button>
            <div className={"box " + (isDisplayed ? "display" : "hide")}></div>
        </Wrapper>
    )
}
export default ButtonAndBox