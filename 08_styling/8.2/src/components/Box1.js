import Box2 from './Box2'

const Box1 = () => {
  const style1 = {width: "50vw"}
  const style2 = {height: "30vw"}
  const style3 = {background:  "rgb(94, 161, 94)"}
  const style4 = {display: "flex"}
  const style5 = {justifyContent: "center"}
  const style6 = {alignItems: "center"}

  return (
    <div style={{...style1, ...style2, ...style3, ...style4, ...style5, ...style6}}>
        <Box2/>
    </div>
  )
}
export default Box1

