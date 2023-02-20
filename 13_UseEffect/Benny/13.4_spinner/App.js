import './App.css';
import { useEffect, useRef } from 'react';

const App = () => {

  const refDiv1 = useRef(null);


  useEffect(() => {
    let id;
    let id2;

    id = setTimeout(() => {
      refDiv1.current.classList.add('lds-ripple');
    }, 0);

    id2 = setTimeout(() => {
      refDiv1.current.classList.remove('lds-ripple');
    }, 5000);

    return () => {
      id && clearTimeout(id);
      id2 && clearTimeout(id2);
    }

  }, []);

  return (
    <div className='App.css'>
      <div ref={refDiv1} ><div></div><div></div></div>

    </div>
  );
};

export default App;