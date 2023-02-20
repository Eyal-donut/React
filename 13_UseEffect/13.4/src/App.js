import './App.css'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

const App = () => {
  const [hide, setHide] = useState('');
  
  useEffect(()=> {
    const timeOutID = setTimeout(()=> {
      setHide('hide')
    },2000)

    return (()=> {
      clearTimeout(timeOutID)
    })
  },[])

  return (
  <>
    <Spinner className={'spinner'+ hide}/>
  </>
  )
}
export default App;