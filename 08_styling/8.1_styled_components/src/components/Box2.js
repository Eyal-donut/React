import styled from "styled-components"
import Box3 from "./Box3"

const Box2 = () => {

  const Div = styled.div`
  width: 45vw;
  height: 25vw;
  background:  rgb(69, 125, 208);
  display: flex;
  align-items: center;
  justify-content: center;
  `
    return (
    <Div>
        <Box3/>
      </Div>
    )
  }
  
  export default Box2