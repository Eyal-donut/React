import Box4 from "./Box4"

const Box3 = () => {
  const style1 = {width: "40vw"}
  const style2 = {height: "20vw"}
  const style3 = {background:  "pink"}
  const style4 = {display: "flex"}
  const style5 = {justifyContent: "center"}
  const style6 = {alignItems: "center"}
  const style7 = {flexDirection: "column"}
    return (
    <div style={{...style1, ...style2, ...style3, ...style4, ...style5, ...style6, ...style7}}>
          <Box4/>
          <Box4/>
      </div>
    )
  }
  
  export default Box3