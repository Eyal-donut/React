import './App.css'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Card from './Card'
import Input from './Input'

const App = () => {
  const [users, setUsers] = useState([])
  const [currentUsers, setCurrentUsers] = useState([])
  const inputRef = useRef(null)
  
  let response = []

  const fetchData = async () => {
    try {
      response = await axios.get('https://randomuser.me/api/?results=10')

      setUsers(response.data.results)
      setCurrentUsers(response.data.results)
      
    } catch (error) {
      console.log('Oops, something went wrong')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    inputRef.current.focus()
  },[])
  
  return (
    <>
    <Input onInputChange={setCurrentUsers} users={users} inputRef={inputRef}/>

    {currentUsers.map((user) => {
      return (
        <Card 
        key={user.cell} 
        username={`${user.name.title} ` + `${user.name.first} ` + user.name.last}
        userAvatar={user.picture.large}
        />
      )
    })}
    </>
  )
}
export default App;