import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CustomProvider"


const CartWidget = () => {

    const {cantidad} = useContext(contexto)
    
    return(
        <NavLink to="/cart">
            <span className="iconCart">
                <img src="/cart.png" className="cart" />  
            </span>
            <span className="cantCart">
                {cantidad} 
            </span>
        </NavLink>
    )
}

export default CartWidget