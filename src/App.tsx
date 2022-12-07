import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./routes/HomePage/About";
import HomePage from "./routes/HomePage";
import NotFound from "./routes/HomePage/NotFound";
import Products from "./routes/HomePage/Products";
import WelcomePage from "./routes/HomePage/WelcomePage";
import Computers from "./routes/HomePage/Products/Computers";
import Eletronics from "./routes/HomePage/Products/Eletronics";
import Boooks from "./routes/HomePage/Products/Books";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<WelcomePage />} />
          <Route path="products" element={<Products />}>
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Boooks />} />
          </Route>
          <Route path="about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
