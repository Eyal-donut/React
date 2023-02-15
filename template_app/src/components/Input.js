import Wrapper from "./Helpers/Wrapper"

const Input = ({labelText, inputType, inputName, parentFunc, e}) => {
    return(
        <Wrapper>
            <label for={inputName} >{labelText}</label>
            <input name={inputName} type={inputType} onChange= {() => parentFunc(e.target.value)}></input>
        </Wrapper>
    )
}
export default Input