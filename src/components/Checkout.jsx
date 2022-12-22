import React, { useContext, useState } from 'react'
import { cartContext } from './CartContextComponent';
import {addDoc, collection, getFirestore} from "firebase/firestore";

export default function CheckOut() {
  const {totalToPay, cart, deleteAllFromCart} = useContext(cartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  function validateForm(){
    const order = {
      buyer: {name, tel, email},
      totalToPay,
      cart,
    };
  
    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({id})=> {
      setOrderId(id);
      deleteAllFromCart();
    });

  }

  if(cart.length == 0){ 
    return (<>No hay nada en el carrito</>)
}
  
  return (
    <>
    {orderId ? ("Gracias por su Compra! El codigo de seguimiento es :" + orderId) :
    ( <div><h1>Terminar Compra - Ingrese sus datos</h1><br/>
        <input type = "text" placeholder='name' onChange={(e) => setName(e.target.value)}/><br/>
        <input type = "tel" placeholder='tel' onChange={(e) => setTel(e.target.value)}/><br/>
        <input type = "email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        <button onClick={validateForm}>Finalizar Pedido</button>
    </div>
    )}
    </>
  );
}
