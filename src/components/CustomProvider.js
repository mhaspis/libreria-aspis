import { createContext , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = (props) =>{

    const [cantidad, setCantidad] = useState(0)
    const [totalCompra, setTotalCompra] = useState(0)
    const [carrito, setCarrito] = useState([])
    

    const agregarProducto = (producto) =>{
        const carritoNew = carrito.filter((item) => item.id === producto.id)
        console.log(carritoNew)
        
        if(carritoNew.length>0){
            setCantidad(cantidad + producto.cantidad)            
            
        }else{
            setCantidad(cantidad + producto.cantidad)
            setCarrito([...carrito, producto])
        } 
        

        /* {carrito.find(producto.id) 
            ? setCantidad(cantidad + producto.cantidad)
            
            : setCantidad(cantidad + producto.cantidad)
            setCarrito([...carrito, producto])} */
        

        
            setTotalCompra(totalCompra + (producto.cantidad*producto.price))        
               
    }

    const eliminarProducto = (id) =>{

        const itemBorrado = carrito.filter((producto) => producto.id !== id)
        setCarrito(itemBorrado)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito: carrito,
        totalCompra: totalCompra,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider
