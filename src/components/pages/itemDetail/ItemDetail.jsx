import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd }) => {
    return (
        <div className="item-detail">
        <div className="item-detail-image">
            <img src={product.img} alt={product.title} />
        </div>
        <div className="item-detail-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <CounterContainer stock={product.stock} onAdd={onAdd} />
        </div>
        </div>
    );
};

export default ItemDetail;