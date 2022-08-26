import CartWidget from "./CartWidget"
import { useContext } from "react"
import {NavLink} from "react-router-dom"
import {Link} from "react-router-dom"
import { contexto } from "./CustomProvider"

function NavBar(){

    const {carrito} = useContext(contexto)

    return (
        <header>
            <h1 className="titulo"><Link className="titulo" to="/">Libreria Mhaspis</Link></h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li>
                    <li><NavLink to="categoria/Ficcion">Ciencia Ficcion </NavLink></li> 
                    <li><NavLink to="categoria/Suspenso">Suspenso </NavLink></li>
                    <li><NavLink to="categoria/Terror">Terror </NavLink></li>
                    <li><NavLink to="categoria/Romanticas">Novela Romanticas</NavLink></li>
                    <li><NavLink to="categoria/Fantasia">Fantasia </NavLink></li> 
                    <li><NavLink to="categoria/Politica">Politica </NavLink></li> 
                    <>{carrito.length!==0 ? <NavLink to="/cart"><CartWidget/> </NavLink> : ""}</>
                </ul>
                                  
            </nav>
        </header>
    ) 
     

}

export default NavBar