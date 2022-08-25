import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemCount from "./ItemCount"
import Cart from "./Cart"
import { contexto } from "./CustomProvider"

const ItemDetail = ({item}) =>{

    
    const producto = {item}

    const {agregarProducto} = useContext(contexto)
    

    const onAdd = (estadoContador) =>{
        
        item.cantidad = estadoContador

        agregarProducto(item)
    } 
    
    return (
        <>        
        <div className="detail-card">
            <h2>{item.title}</h2>
            <img className="detail-tumb" src={item.pictureUrl} alt="" />
            <h3 className="detail-description">{item.description} "{item.category}"</h3>
            <p className="detail-price">${item.price}</p>          
            <ItemCount onAdd = {onAdd}/>          
            <Link className="detail-bottom-details" to={"/cart"}>Comprar</Link>
        </div>
        </>
    )

}

export default ItemDetail 