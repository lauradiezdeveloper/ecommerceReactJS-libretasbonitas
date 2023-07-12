import { Link } from "react-router-dom";

const ProductCard = ({ element, isInItemList = true}) => {
    return (
        <div>
            <div>
                <img src= {element.img}></img>
            </div>
            <h1>{element.title}</h1>
            <h2>{element.price}</h2>
            <p>{element.description}</p>
            <div> 
            {isInItemList ? (
                <Link to={`/itemDetail/${element.id}`}><button>Ver detalle</button></Link>
            ) : ( 
                <button>Eliminar del carrito</button>
            )}
            </div>
        </div>
    );
};

export default ProductCard