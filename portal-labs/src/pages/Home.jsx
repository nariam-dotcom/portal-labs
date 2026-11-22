import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
        <header className = "heading">
      <h1>Product Admin Portal</h1>
      </header>
      <p className = "text ">Manage your store: <br />
      where you can view your products , add products ,and easily update products. </p>
      <Link to="/products" className="btn">View Products</Link>
    </section>
  );
}