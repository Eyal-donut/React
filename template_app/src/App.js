import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')

  const fetchData = async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/')
    const data = response.data
    setTitle(data.title)
    setDirector(data.director)
  }
  useEffect(() => {
    fetchData()

  },[])
  
  return (
    <>
      <li>Movie Title: {title}</li>
      <li>Movie Director: {director}</li>
    </>
  )
}
export default App;