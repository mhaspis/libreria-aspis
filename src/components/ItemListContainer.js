import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{

    const mostrarCatalogo = props.mostrarCatalogo;
        if(mostrarCatalogo){
        
        return <container>      
            <h2>Nuestro Nuevo Catalogo</h2>
            <ItemCount stock={5} initial={1}/>
            </container>
        }

}

export default ItemListContainer