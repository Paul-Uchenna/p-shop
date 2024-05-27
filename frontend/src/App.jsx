import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./pages/Shops";
import ShopCategories from "./pages/ShopCategories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./component/Footer/Footer";
import men_banner from "./component/assets/banner_mens.png";
import women_banner from "./component/assets/banner_women.png";
import kid_banner from "./component/assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route
            path="/men"
            element={<ShopCategories banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategories banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategories banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
