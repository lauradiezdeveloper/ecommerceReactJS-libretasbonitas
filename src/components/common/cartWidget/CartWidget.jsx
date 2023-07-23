import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <>
            <Link to="/cart"> 
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon color="action" />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget