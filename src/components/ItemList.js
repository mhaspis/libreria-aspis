import Item from "./Item";
import Grid from '@mui/material/Grid';

function ItemList ({listProducts}) {

    return(
        <>
        <Grid container columnSpacing={2}>
            {Array.from(listProducts).map((product, index) => (
            <Grid xs={2} sm={4} md={3} xl={2} sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'10px'}} key={index}>
                <Item key={product.id} product={product} />
            </Grid>))}
        </Grid>
        </>
    )

}

export default ItemList