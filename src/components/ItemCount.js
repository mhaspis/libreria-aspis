import {useState} from "react";

function ItemCount({onAdd}){

    const [estadoContador, setEstadoContador] = useState(0);

    const aumentarUnidades = () => {
        
        setEstadoContador(estadoContador + 1)
        
    }

    const restarUnidades = () => {

        if(estadoContador>1){
            setEstadoContador(estadoContador - 1)
        }
    }

    const agregarCarrito = () =>{

        onAdd(estadoContador)
    }

    return (
        <>
        <div>
        <div className="unidades">
            <button className="controlUnidades" onClick={restarUnidades}>-</button>
            <p className="controlUnidades">{estadoContador}</p>
            <button className="controlUnidades" onClick={aumentarUnidades}>+</button>
        </div>
        <div>
            <button className="detail-bottom-details" onClick={agregarCarrito}> Agregar al carrito</button>
        </div>
        </div>
        
        </>
    )

}

export default ItemCount