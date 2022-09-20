import { useState, useEffect } from "react";
import { Circles } from  'react-loader-spinner'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "./firebase"
import { collection, getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const referencia = doc(productosCollection, id)
        const consulta = getDoc(referencia)
        consulta
        .then((res)=>{
            const item = {
                ...res.data(),
                id:res.id
            }
            setLoading(true)
            setItem(item)
        })
        .catch((err) =>{           
        })              
    },[id])
    
        return (
            <>
            <br/>
        {<div className="loading">{!loading && <Circles />}</div>}
        {loading && <ItemDetail item = {item} />}
        </>
            
            )      

}

export default ItemDetailContainer