import React from 'react';
import {Link} from "react-router-dom"

export default function Item({product}) {
  return (
    <>
    <Link to = {'/item/' + product.id}>
    <div>
        <p>id : {product.id}</p>
        <p>name : {product.name}</p>
        <p>price : {product.price}</p>
        <p>stock : {product.stock}</p>
        <img style={{height: "200px"}} src={product.img} alt = {product.name}></img>
    </div>
    </Link>
    <br />
    </>
  )
}
