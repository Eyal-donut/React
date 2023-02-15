import React, { useState } from 'react'
import Name from "./Name";
import Card from "./components/Card";
import data from './Data';

function App() {
const getAllNames = (arr) => arr.map((person)=> person.name)
const getBeforeYear = (arr, year) => arr.filter((person) => (person.birthday).slice(-4) < year)

const [allNamesArray, setNamesArray] = useState(getAllNames(data))
const [allBefore1990, setAllBeforeYear] = useState(getBeforeYear(data, "1990"))

console.log(allNamesArray)
console.log(allBefore1990)

  return (
    <>
    <ul>
    {allNamesArray.map((person) =>
      <Name name = {person} /> )}
  </ul>
      {allBefore1990.map((person) =>
      <Card
      personName={person.name}
      personBirthday={person.birthday}
      favFish={(person.favoriteFoods.fish).join(", ")}
      favMeats={(person.favoriteFoods.meats).join(", ")}
        />)}
  </>
    

  )
}
export default App;
