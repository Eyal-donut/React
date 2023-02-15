import Wrapper from "./Helpers/Wrapper"


const Select = () => {
    return (
        <Wrapper>
            <label for="select">Age: </label>
            <select name="Age">
                <option value={"12-18"}>12-18</option>
                <option value={"19-27"}>19-27</option>
                <option value={"28-120"}>28-120</option>
            </select>
        </Wrapper>
    )
}

export default Select