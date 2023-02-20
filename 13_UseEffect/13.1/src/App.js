import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [favoriteColor, setFavoriteColor] = useState('green')

  useEffect(() => {

    const timerIdentifier = setTimeout(()=>{
      setFavoriteColor('blue')
    },1000)
    
    return () =>  clearTimeout(timerIdentifier);
  }, [favoriteColor]);


  return (
    <>
    <h1>My favorite color is: {favoriteColor}</h1>
    <div id="color" className={favoriteColor}/>
    </>
  )
 
}
export default App;