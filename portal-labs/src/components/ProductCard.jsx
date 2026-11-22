import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">${product.price}</p>
      <Link to={`/products/${product.id}`} className="btn">
        View / Edit
      </Link>
    </article>
  );
}