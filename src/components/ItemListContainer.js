const ItemListContainer = () =>{
    return(
    <container>
        <Greeting mostrarCatalogo={true} />
    </container>
    )
}

const Greeting = (props) => {

    const mostrarCatalogo = props.mostrarCatalogo;

    if(mostrarCatalogo){
        return <h2>Nuestro Catalogo</h2>
    }
     
}

export default ItemListContainer