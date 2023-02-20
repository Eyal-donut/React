import './App.css'
import Input from './Input'
import React, { useEffect, useRef } from 'react'

const App = () => {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()

  }, [])
  
  return <Input ref={inputRef}/>
}
export default App;