import './App.css';
import { useEffect, useRef } from 'react';

const App = () => {

  const refDiv1 = useRef(null);


  useEffect(() => {
    refDiv1.current.classList.add('box1');
  },[]);


  return (
    <div className='App.css'>
      <div ref={refDiv1}></div>

    </div>
  );
};

export default App;