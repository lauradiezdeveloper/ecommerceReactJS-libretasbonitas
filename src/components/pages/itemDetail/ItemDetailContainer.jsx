import { useEffect, useState } from "react";
import { products } from "../../../productMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const {id} = useParams()


    useEffect(() => {
        let productSelected = products.find((element) => element.id === +id);
        const task = new Promise((res, /* rej */) => {
        res(productSelected)
        });
        task.then(res => setProduct(res) )

    }, [id]);

    const onAdd = (cantidad) => {
        console.log(product);
        console.log(cantidad);
    };

    return (

    <div>
        <ItemDetail product={product} onAdd={onAdd} />
    </div>
    );
};

export default ItemDetailContainer;