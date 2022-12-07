import './styles.css';
import homeIcon from "../../assets/home.svg";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="nav-container container">
                <div className="left-nav-container">
                    <NavLink className={({isActive}) => isActive ? "nav-item item-active" : "nav-item"} to="/home">
                        Início
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item item-active" : "nav-item"} to="/products">
                        Produtos
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? "nav-item item-active" : "nav-item"} to="/about">
                        Sobre nós
                    </NavLink>
                </div>
                <Link to="/home">
                <img src={homeIcon} alt="Início" />
                </Link>
                
            </nav>
        </header>
    );
}