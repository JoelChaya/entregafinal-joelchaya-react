import React, {useEffect, useState} from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {


  const [product, setProduct] = useState ({});
  const {idItem} = useParams();

  useEffect(() => {

    const db = getFirestore();
    const refDoc = doc(db,'products',idItem);


    getDoc(refDoc).then((item)=>{
      const aux = {
        ...item.data(),
        id: item.id,
      }

    setProduct(aux);
  });
  

  }, [idItem]);
  

  return<ItemDetail product = {product}/>;
}
