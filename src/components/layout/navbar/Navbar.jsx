import "./Navbar.css"
import CartWidget from "../../common/cartWidget/CartWidget"
import SubNavbar from "./subNavbar/SubNavbar"
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import LoginWidget from "../../common/loginWidget/LoginWidget";

const Navbar = () => {
    return (
            <section className="navbar-container">
                <section className="navbar">
                    <div className="logo-container">
                        <MenuIcon className="icon" />
                        <Link to="/"><img src="https://res.cloudinary.com/djmvj6dpt/image/upload/v1687026934/ecommerce-libretasbonitas/naming2_libretas-bonitas-com.png" alt="libretasbonitas.com" /></Link>
                    </div>
                    <div className="icons-container">
                        {/* <SearchIcon className="icon" /> */}
                        <LoginWidget />
                        {/* <FavoriteIcon className="icon" /> */}
                        <CartWidget />
                    </div>
                </section>
                <SubNavbar />
            </section>
    )
}

export default Navbar