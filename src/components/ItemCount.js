import {useState} from "react";

function ItemCount({stock, initial, onAdd}){

    let productStock = stock;
    let contInitial = initial;
    const [contador, setContador] = useState(contInitial);
    

    const aumentarUnidades = () => {
        if(contador<productStock){
            setContador(contador + 1)
        }
    }

    const restarUnidades = () => {

        if(contador>1){
            setContador(contador - 1)
        }
    }

    return (
        <>
        <div>
        <div className="unidades">
            <button className="controlUnidades" onClick={restarUnidades}>-</button>
            <p className="controlUnidades">{contador}</p>
            <button className="controlUnidades" onClick={aumentarUnidades}>+</button>
        </div>
        <div>
            <button className="agregarCarrito"> Agregar al carrito</button>
        </div>
        </div>
        </>
    )

}

export default ItemCount