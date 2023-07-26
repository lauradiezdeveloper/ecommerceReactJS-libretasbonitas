import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (item)=>{

        const productExists = isInCart(item.id);

        if (productExists) {
            let addQuantity = cart.map((elemento) => {
                if (elemento.id === item.id) {
                    return { ...elemento, quantity: elemento.quantity + item.quantity };
                } else {
                    return elemento;
                }
                });
            setCart(addQuantity);
        } else {
        setCart( [...cart, item] )
        }
    };

    // Limpiar todo el carrito
    const clearCart = ()=>{
        setCart([])
    };

    // Limpiar un elemento del carrito (por id)
    const deleteById = (id)=> {
        let deleteButonCart  = cart.filter((elemento)=>elemento.id !== id);
        setCart(deleteButonCart);
    };

    // Determinar si un producto existe en el carrito
    const isInCart = (id) => {
        let exist = cart.some ( (elemento) => {elemento.id === id})
        return exist
    }

    let data = { cart, addToCart, clearCart, deleteById };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextProvider