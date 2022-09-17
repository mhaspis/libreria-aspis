import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemCount from "./ItemCount"
import Cart from "./Cart"
import { contexto } from "./CustomProvider"

const ItemDetail = ({item},{id}) =>{

    console.log({id})
    console.log({item})

    const {agregarProducto} = useContext(contexto)
    

    const onAdd = (estadoContador) =>{
        
        item.cantidad = estadoContador

        agregarProducto(item, id)
    } 
    
    return (
        <>        
        <div className="detail-card">
            <h2>{item.titulo}</h2>
            <img className="detail-tumb" src={item.imagenUrl} alt="" />
            <h3 className="detail-description">{item.descripcion} "{item.categoria}"</h3>
            <p className="detail-price">${item.precio}</p>          
            <ItemCount onAdd = {onAdd}/>          
            <Link className="detail-bottom-details" to={"/cart"}>Comprar</Link>
        </div>
        </>
    )

}

export default ItemDetail 