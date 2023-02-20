import './App.css'
import React, { useEffect, useRef } from 'react'

const App = () => {
  const refBox1 = useRef(null)
  const refBox2 = useRef(null)
  const refBox3 = useRef(null)

  useEffect(() =>{
    const timerID1 = setTimeout(() => {

      refBox1.current.classList.add('box1') 
      refBox2.current.classList.add('box2') 
      refBox3.current.classList.add('box3') 
      
    }, 1000)
    
    const timerID2 = setTimeout(()=> {
      
      refBox1.current.classList.remove('box1') 
      refBox2.current.classList.remove('box2') 
      refBox3.current.classList.remove('box3') 
      

    },4000)

    return () => {
      clearTimeout(timerID1)
      clearTimeout(timerID2)
    }
  }, [])

  return (
  <>
    <div ref={refBox1}/>
    <div ref={refBox2}/>
    <div ref={refBox3}/>
  </>
  )
}
export default App;