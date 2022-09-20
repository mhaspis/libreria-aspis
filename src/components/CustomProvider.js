import { createContext , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = (props) =>{

    const [totalCompra, setTotalCompra] = useState(0)
    const [carrito, setCarrito] = useState([])
    
    const isInCart = (id) =>{
        return carrito.some(x => x.id === id)
    }

    const agregarProducto = (producto, cantidad) =>{
        
        const nuevoProducto = {
            ...producto,
            cantidad
        }

        if(isInCart(nuevoProducto.id)){
            const encontrarProducto = carrito.find(x => x.id === nuevoProducto.id)
            const productoIndex = carrito.indexOf(encontrarProducto)
            const auxProducto = [...carrito]
            auxProducto[productoIndex].cantidad += cantidad
            setCarrito(auxProducto)
        }else{
            setCarrito([...carrito, nuevoProducto])
        }      
    }

    const eliminarProducto = (id) =>{

        const itemBorrado = carrito.filter((item) => item.id !== id)
        setCarrito(itemBorrado)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
        const total = 0;
        setTotalCompra(total)
    }

    const cantidadItems = () => {
        ("Cant Items")
        (carrito.reduce((acc, item) => acc += item.cantidad, 0))
        return carrito.reduce((acc, item) => acc += item.cantidad, 0)
    }

    const totalCuenta = () => {
        ("Total Cuenta")
        (carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0))
        return carrito.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }

    const valorDelContexto = {
        carrito: carrito,
        totalCompra: totalCompra,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        isInCart,
        cantidadItems,
        totalCuenta
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider
