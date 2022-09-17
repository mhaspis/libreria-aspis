import { createContext , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = (props) =>{

    const [cantidad, setCantidad] = useState(0)
    const [totalCompra, setTotalCompra] = useState(0)
    const [carrito, setCarrito] = useState([])
    

    const agregarProducto = (producto, idProducto) =>{
        const carritoNew = carrito.filter((item) => item.id === idProducto)
        console.log(carrito)
        console.log(carritoNew)
        console.log(idProducto)

        if(carritoNew.length>0){           
            setCantidad(cantidad + producto.cantidad)   
            setCarrito([...carrito, producto])         
            console.log("Carrito actualizado")
            
        }else{
            setCantidad(cantidad + producto.cantidad)
            setCarrito([...carrito, producto])
            console.log("Carrito Nuevo guardado")
        } 
        
        setTotalCompra(totalCompra + (producto.cantidad*producto.precio))        
               
    }

    const eliminarProducto = (producto) =>{

        const itemBorrado = carrito.filter((item) => item.id !== producto.id)
        setCarrito(itemBorrado)
        setTotalCompra(totalCompra - (producto.cantidad*producto.precio)) 
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        const total = 0;
        setTotalCompra(total)
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
