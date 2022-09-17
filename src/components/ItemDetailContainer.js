 import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
/* import { products } from "../assets/productos"; */
import { Circles } from  'react-loader-spinner'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "./firebase"
import { collection, getDoc, doc, getFirestore, query, where} from "firebase/firestore";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
/*     var idParam =parseInt(id, 10) */


    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const consulta = getDoc(referencia)
        
        consulta
        .then((res)=>{
            setLoading(true)
            setItem(res.data())
        })
        .catch((err) =>{
            
        })
        
        console.log({id})

    },[id])
        return (
            <>
            <br/>
        {<div className="loading">{!loading && <Circles />}</div>}
        {loading && <ItemDetail item = {item} id= {id}/>}
        </>
            
            )      

}

export default ItemDetailContainer