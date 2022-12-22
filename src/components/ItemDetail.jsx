import React from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({product}) {
  return (
    <div>
    <h1>name : {product.name}</h1>
    <img style={{height: "500px"}} src={product.img} alt = {product.name}></img>
    <p>price : {product.price}</p>
    <p>stock : {product.stock}</p>
    <ItemCount product = {product} />
</div>
  )
}
