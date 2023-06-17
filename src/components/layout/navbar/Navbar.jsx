import "./Navbar.css"
import Cart from "../../pages/cart/Cart"
import SubNavbar from "./subNavbar/SubNavbar"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <section className="navbar-container">
            <section className="navbar">
                <div className="logo-container">
                    <MenuIcon className="icon" />
                    <img src="https://res.cloudinary.com/djmvj6dpt/image/upload/v1687026934/ecommerce-libretasbonitas/naming2_libretas-bonitas-com.png" alt="libretasbonitas.com" />
                </div>
                <div className="icons-container">
                    <SearchIcon className="icon" />
                    <PersonIcon className="icon" />
                    <FavoriteIcon className="icon" />
                    <Cart />
                </div>
            </section>
            <SubNavbar />
        </section>
    )
}

export default Navbar