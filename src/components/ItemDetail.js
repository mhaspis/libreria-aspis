import { useContext, useState } from "react"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount"
import { contexto } from "./CustomProvider"

const ItemDetail = ({item}) =>{

    const [cantidad, setCantidad] = useState(1)
    const {isInCart, agregarProducto} = useContext(contexto)

    const onAdd = () =>{
        isInCart(item.id)      
        agregarProducto(item, cantidad)
    } 
    
    return (
        <>        
        <div className="detail-card">
            <h2>{item.titulo}</h2>
            <img className="detail-tumb" src={item.imagenUrl} alt="" />
            <h3 className="detail-description">{item.descripcion} "{item.categoria}"</h3>
            <p className="detail-price">${item.precio}</p>          
            <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={item.stock} onAdd = {onAdd}/>          
            <Link className="detail-bottom-details" to={"/cart"}>Ir al carrito</Link>
        </div>
        </>
    )

}

export default ItemDetail 