import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './styles.css'

export default function ProductsMenu() {
    return (
        <div className="products-menu-container">
            <NavLink className={({ isActive }) => isActive ? "products-menu-item item-active" : "products-menu-item"} to="/products/computers">
                Computadores
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "products-menu-item item-active" : "products-menu-item"} to="/products/eletronics">
                Eletrônicos
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "products-menu-item item-active" : "products-menu-item"} to="/products/books">
                Livros
            </NavLink>
        </div>
    );
}