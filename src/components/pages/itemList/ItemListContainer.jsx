import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { db } from '../../../firebaseConfig';
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const [items, setItems] = useState([])
//    const [error, setError] = useState({})

    const { categoryName } = useParams();

    useEffect(() => {
        let productsCollection = collection(db, "products");
        let productCategory;

        productCategory = categoryName ? query(productsCollection, where("category", "==", categoryName)) : productsCollection;
        
        getDocs(productCategory).then((res)=>{
            let products = res.docs.map ( doc => {
                return{...doc.data(), id: doc.id}
            });
            setItems(products)
        });

    }, [categoryName]);

    return <ItemList items={items} />;
    };

export default ItemListContainer;