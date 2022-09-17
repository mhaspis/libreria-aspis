import ItemDetailContainer from "./ItemDetailContainer"
import { Link } from "react-router-dom"

const Item = ({product}) => {

    return(
        <>
        <div className="product-card">
            
            <div className="product-tumb">
                <img src={product.imagenUrl} alt="" />
            </div>
            <div className="product-title">{product.titulo}</div>
            <div className="product-details">
                <div className="product-description">{product.descripcion} "{product.categoria}"</div>
                <div className="product-price">${product.precio}</div>
                <div className="product-bottom-details">
                    <Link to={`/detalle/${product.id}`} className="item-button">Ver Detalle</Link>                   
                </div>  
            </div>
	    </div>
        </>
    )

}

export default Item