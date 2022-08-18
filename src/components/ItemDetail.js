import { useState } from "react"
import {Link} from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemCount from "./ItemCount"
import Cart from "./Cart"

const ItemDetail = ({item}) =>{

    const [estadoCantidad, setEstadoCantidad] = useState(0)
    const producto = {item}

    const onAdd = (estadoContador) =>{
        
        const cantidad = estadoContador
        setEstadoCantidad(cantidad)
    } 
    console.log({producto})
    console.log(estadoCantidad)
    
    return (
        <>
         {/* <div className="detail-card">
            
            <div className="detail-tumb">
                <img src={item.pictureUrl} alt="" />
            </div>
            <div className="detail-title">{item.title}</div>
            <div className="details">
                <div className="detail-description">{item.description} "{item.category}"</div>
                <div className="detail-price">${item.price}</div>
                <div className="detail-bottom-details">
                    <Link to={ItemDetailContainer(item)}>Comprar</Link>                   
                </div>  
            </div>
	    </div>  */}
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