import './App.css'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

const App = () => {
  const [isDisplay, setDisplay] = useState(true);
  
  useEffect(()=> {
    const timeOutID = setTimeout(()=> {
      setDisplay(false)
    },2000)

    return (()=> {
      clearTimeout(timeOutID)
    })
  },[])

  return (
  <>
    {isDisplay && <Spinner/>}
  </>
  )
}
export default App;