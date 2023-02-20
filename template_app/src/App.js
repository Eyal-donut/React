import './App.css'
import React, { useEffect, useRef } from 'react'

const App = () => {

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const refBox1 = useRef(null)
 
  useEffect(() =>{
    const intervalID = setInterval(() => {
      refBox1.current.style.backgroundColor =  getRandomColor()
    }, 500)
    
     const timerID = setTimeout(()=> {
      
      refBox1.current.classList.add('circle') 
     },2500)

    return () => {
      clearTimeout(timerID)
      clearInterval(intervalID)
    }
  }, [])

  return (
  <>
    <div ref={refBox1} className='box'/>
  </>
  )
}
export default App;