import { useState } from "react"
import { useContext } from "react"
import {Link} from "react-router-dom" 
import { contexto } from "./CustomProvider"
import Checkout from "./Checkout"

const Cart = ({producto,cantidad}) =>{

    const [checkout, setCheckout] = useState(false)
    const {carrito, eliminarProducto, vaciarCarrito, totalCuenta} = useContext(contexto)


    if(carrito.length>0){
        return ( 
            <>
            <br />                 
            <div className="row">
                <div className='row col-xl-12 col-md-12'>
                    <div className='col-xl-10 col-md-10'>
                        <div className="col-xl-12 col-md-12 d-flex align-items-center justify-content-evenly">

                            <div className="col-md-1">                           
                            </div>
                            
                            <div className="col-md-4">
                                <h5>Producto</h5>
                            </div>
                            <div className="col-md-1">
                                <h5>Cantidad</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Precio</h5>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                        {
                            carrito.map((producto, index) => {
                                return  <div className='col-xl-12 col-md-12 d-flex align-items-center justify-content-evenly' key={index}>
                                            <div className="col-md-1">
                                                <img className="imgCarrito" src={producto.imagenUrl} alt={producto.nombre} width={150}></img>
                                            </div>
                                            
                                            <div className="col-md-4">
                                                <h5>{producto.titulo}</h5>

                                            </div>
                                            <div className="col-md-1">
                                                <h5>{producto.cantidad}</h5>
                                            </div>
                                            <div className="col-md-2">
                                                <h5>${producto.precio}</h5>
                                            </div>
                                            <div className="col-md-2">
                                                <button onClick={() => eliminarProducto(producto.id)} className='btn btn-danger'>Delete</button>
                                            </div>
                                        </div>
                            })
                        }
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <button onClick={() => vaciarCarrito()} className='btn btn-warning'>Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col xl-6">
                        <h2>Total: ${totalCuenta()}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className='col-xl-4'>
                    {
                        !checkout
                            ? <button onClick={() => setCheckout(true)} className='btn btn-success'>Ir al Checkout</button>
                            : <Checkout />
                    }
                    </div>
                </div>               
            </div> 
            </>  
        )
    }
    return (
        <div>
            <h1>No hay items</h1>
            <Link className="detail-bottom-details" to={"/"}>Volver al catalogo</Link>
        </div>
        )
}
export default Cart