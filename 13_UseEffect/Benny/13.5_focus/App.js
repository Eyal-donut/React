import './App.css';
import { useEffect, useRef } from 'react';

const App = () => {

  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();

  }, []);

  return (
    <div className='App.css'>
      <input type='text' ref={inputRef}/>

    </div>
  );
};

export default App;