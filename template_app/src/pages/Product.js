import { Link, useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import ErrorPage from "./ErrorPage";
import store from "../store";

const Product = () => {

const [product, setProduct] = useState("");
const params = useParams();

useEffect(()=> {
    store[params.productID - 1] && setProduct(store[params.productID - 1])
    setProduct(store[params.productID - 1])
},[])
console.log(product)

    if (!store[params.productID - 1]) {
        return <ErrorPage/>
    } 
  return (
    <>
      <h1 key={params.productID}>{product.title}</h1>
      <img src={product.imageUrl} width='200' height='200'></img>
      <p>Price: {product.price}</p>
      <p>Size: {product.size}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default Product
