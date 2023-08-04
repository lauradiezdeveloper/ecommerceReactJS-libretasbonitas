import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addToCart = (item) => {
        const productExists = isInCart(item.id);
        
        const addQuantity = productExists
            ? cart.map((elemento) =>
                elemento.id === item.id
                    ? { ...elemento, quantity: elemento.quantity + item.quantity }
                    : elemento
            )
            : [...cart, item];

        setCart(addQuantity);
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

    // Calcular el precio total del carrito
    const getTotalPrice = () =>{
        let total = cart.reduce((acc, elemento)=>{
            return acc + (elemento.price * elemento.quantity)
        }, 0)
        return total
    };

    // Calcular la cantidad de items del carrito
    const getTotalQuantity = ()=>{
        let total = cart.reduce( (acc, elemento)=>{
            return acc +  elemento.quantity
        }, 0)
        return total
    };

    // Calcular la cantidad de productos por id
    const getQuantityById = (id)=>{
        const product = cart.find( (elemento)=> elemento.id === id)
        return product?.quantity
    };


    let data = { cart, addToCart, clearCart, deleteById, getTotalPrice, getTotalQuantity, getQuantityById };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}

export default CartContextProvider