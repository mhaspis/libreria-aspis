function ItemCount({cantidad, setCantidad, stock, onAdd}){

    const aumentarUnidades = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }       
    }

    const restarUnidades = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
        <div>
        <div className="unidades">
            <button className="controlUnidades" onClick={restarUnidades}>-</button>
            <div>
                <p className="controlUnidades">{cantidad}</p>
            </div>
            <button className="controlUnidades" onClick={aumentarUnidades}>+</button>
        </div>
        <div>
            <button className="detail-bottom-details" onClick={() => {onAdd()}}> Agregar al carrito</button>
        </div>
        </div>
        
        </>
    )

}

export default ItemCount