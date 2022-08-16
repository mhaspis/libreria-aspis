import { customFetch } from "../assets/customFetch";
import { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { Circles } from  'react-loader-spinner'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        customFetch(products)
            .then(data => 
                {
                setLoading(true)               
                setListProducts(id ? data.filter(item=> {return item.category===id}) : data) 
                    
            })
    },[id])

          
        return (
            <>
            <container>
                <h2>Catálogo</h2>
                <div className="loading">{!loading && <Circles />}</div>
                {loading && <ItemList listProducts = {listProducts} />}
            </container>
            </>  
            
            )       

}

export default ItemListContainer