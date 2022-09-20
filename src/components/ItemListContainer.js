import { useState, useEffect } from "react";
import { Circles } from  'react-loader-spinner'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "./firebase"
import { collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const productosCollection = collection(db, "productos")

        if(!id){
             const consulta = getDocs(productosCollection)

             consulta.then(snapshot=>{           
                const productos =snapshot.docs.map(doc => { 
                    return{
                        ...doc.data(),
                        id: doc.id   
                    }
                })
                setLoading(true)
                setListProducts(productos)   
            })
            .catch(err=>{
            })
        }else{
            const filtro = query(productosCollection, where ("categoria", "==",id))
            const consulta = getDocs(filtro)

            consulta.then(snapshot=>{       
                const productos =snapshot.docs.map(doc => { 
                    return{
                        ...doc.data(),
                        id: doc.id 
                    }
                })
                setLoading(true)
                setListProducts(productos)   
            })
            .catch(err=>{
            })
        }
    }, [id]);

        return (
            <>
                    <h2>Catálogo</h2>             
                    {<div className="loading">{!loading && <Circles />}</div>}
                    {loading && <ItemList listProducts = {listProducts} />}
                
            </>  
            
            )       

}

export default ItemListContainer