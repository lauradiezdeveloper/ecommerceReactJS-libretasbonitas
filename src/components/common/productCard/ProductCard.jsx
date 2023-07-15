import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ element, isInItemList = true}) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                alt={element.title}
                height="400"
                image={element.img}
            />
            <CardContent>
                <h2>{element.title}</h2>
                <h3>{element.price} €</h3>
            </CardContent>
            <CardActions> 
            {isInItemList ? (
                <Link to={`/productos/${element.id}`}><button>Ver la Libreta</button></Link>
            ) : ( 
                <button>Eliminar del carrito</button>
            )}
            </CardActions>
        </Card>
    );
};

export default ProductCard