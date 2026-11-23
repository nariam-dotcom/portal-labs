import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/products/new">Add Product</NavLink>
    </nav>
  );
}