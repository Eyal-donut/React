import React, { useRef } from 'react';

const ClassToggleOnMouseOver = ({primaryClass}) => {
  const classRef = useRef(null)

  return (
    <div
      ref={classRef}
      onMouseOver={() => {
        classRef.current.classList.add("color")
      }}
      onMouseOut={() => {
        classRef.current.classList.remove("color")
      }}
      className = {primaryClass}
    />
  )
}

const ClassChangeOnMouseOver = () => {
  return (
    <>
      <ClassToggleOnMouseOver primaryClass = {"one"} />
      <ClassToggleOnMouseOver primaryClass = {"two"} />
    </>
  )
}

const App = () => {

  return (
      <ClassChangeOnMouseOver/>
  )
}
export default App;