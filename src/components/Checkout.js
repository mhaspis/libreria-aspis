import { useContext } from "react"
import { useState } from "react"
import { contexto } from "./CustomProvider"
import {Link} from "react-router-dom"
import {db} from "./firebase"
import {collection, addDoc, serverTimestamp} from "firebase/firestore"

function Checkout() {

    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
    })

    const [submit, setSubmit] = useState(false)
    const [orden, setOrden] = useState()

    const {carrito, totalCuenta, vaciarCarrito} = useContext(contexto)


    const guardarInput = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()

        const orden = {
            items: carrito,
            cliente: {...cliente},
            fecha: serverTimestamp(),
            precio: totalCuenta(),
        }

        setSubmit(true)
        confirmOrder(orden)
    }

    const confirmOrder = (orden) =>{
        const ordenCollections = collection(db, "orders")
        const consulta = addDoc(ordenCollections, orden)

        consulta
        .then((res) =>{          
                 orden = {
                    ...orden,
                    id: res.id
                }
                setOrden(orden)
                       
        })
        .catch(err =>{
            (err)
        })
    }

    return (
        <>
       { !submit
            &&
            <div className="row">
            <div className="col-md-12">
                <h2>Complete tus datos</h2>
                <form onSubmit={handlerSubmit} >
                    <div className="row">
                        <div className="col-md-12">
                            <input placeholder='Nombre' name='nombre' value={cliente.nombre} onChange={guardarInput} />                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input placeholder='Apellido' name='apellido' value={cliente.apellido} onChange={guardarInput} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input placeholder='Correo Electrónico' name='email' value={cliente.email} onChange={guardarInput} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input placeholder='Domicilio' name='direccion' value={cliente.direccion} onChange={guardarInput} />
                        </div>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Confirmar Compra</button>
                </form>                
            </div>
        </div>
            }
         <div className="row col-xl-12">
            <div className="col-xl-12">
                {
                    submit
                    && <div>
                        <h2>Tu compra se realizó con exito</h2>                       
                        <Link className="detail-bottom-details" to={"/"} onClick={()=>vaciarCarrito()}>Volver a la home</Link>
                    </div>
                }
            </div>
        </div> 
        </>
    )
}
export default Checkout