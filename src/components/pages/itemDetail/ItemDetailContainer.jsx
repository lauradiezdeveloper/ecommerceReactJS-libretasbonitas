import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {CartContext} from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {

    const {addToCart} =useContext(CartContext);

    const [product, setProduct] = useState({});

    const {id} = useParams()


    useEffect(() => {
        let productsCollection = collection (db, "products")
        let productDetail = doc(productsCollection, id);
        getDoc(productDetail).then((res=> {
            setProduct({...res.data(), id: res.id})
        }))
    }, [id]);

    const onAdd = (cantidad) => {
        let productCart = {...product, quantity:cantidad}
        addToCart(productCart)
    };

    return (

    <div>
        <ItemDetail product={product} onAdd={onAdd} />
    </div>
    );
};

export default ItemDetailContainer;