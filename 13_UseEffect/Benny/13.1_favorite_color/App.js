import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [favoriteColor, setFavoriteColor] = useState('blue');

  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor('yellow');
    }, 1000);
  }, []);

  return (
    <div id='color' className='App.css'>
      <h1>My favorite color is {favoriteColor}</h1>
    </div>
  );
};

export default App;