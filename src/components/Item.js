import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({product}) => {

    return(          
            <Card sx={{ width: '90%', height: '100%', marginBottom:'20px', marginLeft:'10px', background:'#F5F5F5', boxShadow: 10 }} >
                <CardActionArea sx={{display:'flex', flexDirection:'column' ,justifyContent:'right', alignItems:'center', marginTop:'10px' }}>
                    <CardMedia sx={{ width: '90%', height: '70%'}}  component="img"  image={product.imagenUrl} alt="" />
                    <CardContent sx={{ width: '90%', height: '25%'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.titulo}
                        </Typography>
                        <Typography variant="body4" color="text.secondary">
                            {product.descripcion} "{product.categoria}"
                        </Typography>
                        <Typography variant="h4" sx={{ marginTop:'20px', marginBottom:'0', color: 'success.main', textAlign: 'center',fontWeight: 'medium' }}>
                             ${product.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display:'flex', flexDirection:'column' ,justifyContent:'right', alignItems:'center', height: '5%'}}>
                    <Button size="small" color="primary">
                        <Link to={`/detalle/${product.id}`} className="item-button">Ver Detalle</Link>
                    </Button>
                </CardActions>
            </Card>
    )

}

export default Item