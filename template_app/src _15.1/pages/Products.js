import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../store';
import classes from '../pages/Products.module.css'
import '../pages/Products-list.css'

const Products = () => {
  const [productsArray, setProducts] = useState([])

  useEffect(() => {
    setProducts(store)
  }, [])
  // const navigate = useNavigate();
  // function navigateHandler() {
    //   navigate('/');
    // }
    
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Go to<Link className={classes.a} to='/'>home page</Link>
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
      <ul className='products-list'>
      {productsArray.map((prod)=> (
          <li key={prod.id}>
            <Link className={classes.a} to={`${prod.id}`}>{prod.title}</Link>
          </li>
        )
      )}
      </ul>
    </>
  )
}
export default Products