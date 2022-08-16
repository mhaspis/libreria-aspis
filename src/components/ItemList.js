import Item from "./Item";

function ItemList ({listProducts}) {

    return(
        <>
            {listProducts.map(product => <Item key={product.id} product={product} />)}
        </>
    )

}

export default ItemList