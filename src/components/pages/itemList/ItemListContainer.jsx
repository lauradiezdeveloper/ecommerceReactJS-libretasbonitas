import { useEffect, useState } from 'react';
import { products } from '../../../productMock';
import ItemList from './ItemList';

import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
//    const [error, setError] = useState({})

    useEffect(() => {
        const tarea = new Promise((resolve, /* reject */) => {
            resolve(products);
            // reject 
        });

        tarea
            .then((respuesta) => setItems(respuesta))
//            .catch((error) => setError(error));
    }, []);

    return (
        < ItemList items={items} />
    );
}

export default ItemListContainer;