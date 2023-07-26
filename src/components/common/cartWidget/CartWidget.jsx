import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';


const CartWidget = () => {
    const {cart} = useContext(CartContext)

    return (
        <>
            <Link to="/cart"> 
                <Badge badgeContent={cart.lenght} color="secondary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget