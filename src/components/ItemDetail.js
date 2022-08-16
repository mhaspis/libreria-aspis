import ItemDetailContainer from "./ItemDetailContainer"
import {Link} from "react-router-dom"

const ItemDetail = ({item}) =>{
    console.log(item)
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
            <Link className="detail-bottom-details" to={ItemDetailContainer(item)}>Comprar</Link>           
        </div>
        </>
    )

}

export default ItemDetail 