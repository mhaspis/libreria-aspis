import ItemDetailContainer from "./ItemDetailContainer"
import { Link } from "react-router-dom"

const Item = ({product}) => {

    return(
        <>
        <div className="product-card">
            
            <div className="product-tumb">
                <img src={product.pictureUrl} alt="" />
            </div>
            <div className="product-title">{product.title}</div>
            <div className="product-details">
                <div className="product-description">{product.description} "{product.category}"</div>
                <div className="product-price">${product.price}</div>
                <div className="product-bottom-details">
                    <Link to={`/detalle/${product.id}`} className="item-button">Ver Detalle</Link>                   
                </div>  
            </div>
	    </div>
        </>
    )

}

export default Item