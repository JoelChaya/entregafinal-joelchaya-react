import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function Navbar() {
  return (
    <div>
      <Link to ="/">Home</Link>
      <br/>
      <Link to ="/category/Bebidas">Bebidas</Link>
      <br/>
      <Link to ="/category/Comidas">Comidas</Link>
      <br/>
      <Link to ="/category/Congelados">Congelados</Link>
      <br/>
      <Link to ="/cart">Cart</Link>
      <br/>
      <Link to ="/checkout">Checkout</Link>
      <br/>
      <CartWidget />
      <br/>
    </div>
  )
}
