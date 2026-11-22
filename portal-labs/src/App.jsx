import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"; 
import ProductList from "./pages/ProductList";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./pages/ProductDetails";
import useProducts from "./hooks/useProducts";

export default function App() {

  const store = useProducts();

  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList {...store} />} />
          <Route path="/products/new" element={<ProductForm {...store} />} />
          <Route path="/products/:id" element={<ProductDetail {...store} />} />
        </Routes>
      </main>
    </>
  );
}