 import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { Circles } from  'react-loader-spinner'
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    var idParam =parseInt(id, 10)
    useEffect(() => {
        customFetch(products)
            .then(data => 
                {
                setLoading(true)
                setItem(idParam ? data.find(item=> item.id==idParam) : data)
                console.log(data)
                console.log(id)
                console.log(idParam)
                
            })

    },[idParam])
    console.log(item)
        return (
            <>
            <br/>
        <div className="loading">{!loading && <Circles />}</div>
        {loading && <ItemDetail item = {item} />}
        </>
            
            )      

}

export default ItemDetailContainer