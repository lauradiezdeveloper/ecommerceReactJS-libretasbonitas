import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="https://res.cloudinary.com/djmvj6dpt/image/upload/v1687026934/ecommerce-libretasbonitas/naming2_libretas-bonitas-com.png" alt="libretasbonitas.com" />
                </div>
                <div className="footer-links">
                    <ul className="footer-nav">
                    <li className="footer-nav-item">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="*">Acerca de nosotros</Link>
                    </li>
                    <li className="footer-nav-item">
                        <Link to="*">Contacto</Link>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
            &copy; 2023 - Made with ❤️ <a href="https://github.com/lauradiezdeveloper" target="_blank" rel="noopener noreferrer">Laura Díez</a>
            </div>
        </footer>
    );
}

export default Footer