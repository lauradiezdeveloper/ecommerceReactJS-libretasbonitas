import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const Cart = () => {
    return (
        <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon color="action" />
        </Badge>
    )
}

export default Cart