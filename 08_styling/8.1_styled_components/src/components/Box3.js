import Box4 from "./Box4"
import styled from "styled-components"


const Box3 = () => {
  
  const Div = styled.div`
  width: 40vw;
  height: 20vw;
  background:  pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `
    return (
      <Div>
          <Box4/>
          <Box4/>
      </Div>
    )
  }
  
  export default Box3