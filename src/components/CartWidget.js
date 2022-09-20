import { Badge, IconButton } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./CustomProvider"


const CartWidget = () => {

    const {cantidadItems} = useContext(contexto)
    
    return(
        <NavLink to="/cart">
            <IconButton aria-label="cart">
                <Badge badgeContent={cantidadItems()} color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </NavLink>
    )
}

export default CartWidget