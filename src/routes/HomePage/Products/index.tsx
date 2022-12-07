import './styles.css';
import { Outlet } from "react-router-dom";
import ProductsMenu from "../../../components/ProductsMenu";

export default function Products() {
    return (
        <main>
            <section className="products-menu-container container mt20">
                <ProductsMenu />
            </section>
            <section className="container mt20">
                <Outlet />
            </section>
        </main>
    );
}