import Box3 from "./Box3"

const Box2 = () => {
  const style1 = {width: "45vw"}
  const style2 = {height: "25vw"}
  const style3 = {background:  "rgb(69, 125, 208)"}
  const style4 = {display: "flex"}
  const style5 = {justifyContent: "center"}
  const style6 = {alignItems: "center"}

    return (
    <div style={{...style1, ...style2, ...style3, ...style4, ...style5, ...style6}}>
        <Box3/>
      </div>
    )
  }
  
  export default Box2