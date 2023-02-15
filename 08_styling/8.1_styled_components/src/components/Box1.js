import Box2 from './Box2'
import styled from 'styled-components'

const Box1 = () => {

  const Div = styled.div`
  width: 50vw;
  height: 30vw;
  background:  rgb(94, 161, 94);
  display: flex;
  align-items: center;
  justify-content: center;
  `
  return (
    <Div>
        <Box2/>
    </Div>
  )
}
export default Box1

