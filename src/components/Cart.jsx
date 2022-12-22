import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from './CartContextComponent'

export default function Cart() {
  const {cart, totalCount, totalToPay, deleteFromCart} = useContext(cartContext);
  return (
    <>
    {cart.map((item) => (
    <div key={item.id}>
      {item.name + " " + item.count} {" "}
       <span onClick={()=> deleteFromCart(item.id)}>🗑️</span>
    </div>
    ))}
    <div>Tenés en el carro: {totalCount} a pagar: {totalToPay}</div>
    <Link to ="/checkout">TERMINAR COMPRA</Link>
    </>
  )
}
