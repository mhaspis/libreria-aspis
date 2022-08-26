import { useState } from "react"
import { useContext } from "react"
import {Link} from "react-router-dom" 
import CustomProvider, { contexto } from "./CustomProvider"

const Cart = ({producto}, {cantidad}) =>{

    const {carrito} = useContext(contexto)
    const {eliminarProducto} = useContext(contexto)
    const {vaciarCarrito} = useContext(contexto)
    const {totalCompra} = useContext(contexto)
    const [total, setTotal] = useState(0)


    const borrarProducto = (producto) =>{

        eliminarProducto(producto)
        
    }
    console.log(carrito.length)
    return (
        <>
        {carrito.length===0 ? 
        <>
        <h1>No hay items</h1>
        <Link className="detail-bottom-details" to={"/"}>Volver al catalogo</Link>
        </>
        : 
        <>
        <div>Mi Carrito</div><table>
                <tr>
                    <td>

                    </td>
                    <td>
                        Titulo
                    </td>
                    <td>
                        Cantidad
                    </td>
                    <td>
                        Precio
                    </td>
                </tr>
                {carrito.map((producto) => (
                    <tr>
                        <td>
                            <img src={producto.pictureUrl} alt="" className="imgCarrito" />
                        </td>
                        <td>
                            {producto.title}
                        </td>
                        <td>
                            {producto.cantidad}
                        </td>
                        <td>
                            ${producto.cantidad * producto.price}
                        </td>
                        <td>
                            <button onClick={() => borrarProducto(producto)}><img src="/delete.png" alt="" /></button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total: </td>
                    <td>${totalCompra}</td>
                </tr>
                <tr>
                    <td><button onClick={vaciarCarrito}>Vaciar Carrito</button></td>
                </tr>
            </table></>
        }
        </>
        
    )

}
export default Cart