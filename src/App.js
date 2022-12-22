import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { createContext, useState } from 'react';
import CartContextComponent from './components/CartContextComponent';


export default function App() {
  
 
  return (
    <>
    <CartContextComponent>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/category/:idCategory' element ={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element ={<ItemDetailContainer/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/checkout' element ={<Checkout/>}/>
      
    </Routes>
    </BrowserRouter>
    </CartContextComponent>
    </>
  );
}


