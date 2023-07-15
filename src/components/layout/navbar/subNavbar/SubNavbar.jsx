import { Link } from 'react-router-dom';
import './SubNavbar.css';

const SubNavbar = () => {
    return (
        <nav className="subnavbar">
            <ul className="category">
                <Link to="/" className="nav-item">Todas las Libretas</Link>
                <Link to="/category/flores" className="nav-item">Libretas de flores</Link>
                <Link to="/category/animales" className="nav-item">Libretas de animales</Link>
                <Link to="/category/aesthetics" className="nav-item">Libretas Aesthetics</Link>
            </ul>
        </nav>
    )
}

export default SubNavbar