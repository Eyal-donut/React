import Wrapper from "./Helpers/Wrapper"

const Checkbox = ({state, text, id}) => {
    return (
    <Wrapper>
    <input name="checkbox" type="checkbox" checked = {state}  key={id}></input>
    <label for="checkbox">{text}</label>
    </Wrapper>
    )
}

export default Checkbox