import { useEffect, useState } from 'react';
import { products } from '../../../productMock';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";


import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
//    const [error, setError] = useState({})

    const { categoryName } = useParams();

    useEffect(() => {
    let productsFiltrados = products.filter(
        (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, /* reject */) => {
        resolve(categoryName === undefined ? products : productsFiltrados);
        //   reject({message: "No autorizado", status: 401})
    });

    tarea
        .then((respuesta) => setItems(respuesta))
        // .catch((error) => setError(error));
    }, [categoryName]);

    return <ItemList items={items} />;
    };

export default ItemListContainer;