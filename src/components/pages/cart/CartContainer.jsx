import { Link } from "react-router-dom"
import { useContext } from "react"
import {CartContext} from "../../context/CartContext"

const CartContainer = () => {

    const {cart, clearCart, deleteById} = useContext(CartContext);

    return (
        <div>
        <h1>CartContainer</h1>

        {cart.map((elemento)=>{
            return (
            <div key={elemento.id}> 
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h5>{elemento.quantity}</h5>
            <button onClick={()=>deleteById(elemento.id)}>eliminar</button>
            </div>
            );
        })}

        <button onClick={clearCart}>limpiar carrito</button>

        <Link to="/checkout">Ir al checkout</Link>
        </div>
    )
}

export default CartContainer