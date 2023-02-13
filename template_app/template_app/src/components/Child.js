import Wrapper from "./Helpers/Wrapper"
import Balloon from "./Balloon"

const Child = ({childName, balloonColor}) => {
    return (
    <Wrapper>
        <div className="child-wrapper">
            <h3>{childName}</h3>
            <Balloon balloonColor = {balloonColor}/>
        </div>
    </Wrapper>
    )
}
export default Child