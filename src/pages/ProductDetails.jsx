import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail({ products, updateProduct, deleteProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [price, setPrice] = useState("");

  if (!product) return <p>Product not found.</p>;

  function handleUpdate(e) {
    e.preventDefault();
    updateProduct(product.id, { price: Number(price) });
    setPrice("");
  }

  function handleDelete() {
    deleteProduct(product.id).then(() => navigate("/products"));
  }

  return (
    <section className="detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>

      <form onSubmit={handleUpdate}>
        <input type="number" placeholder="New price" value={price}
               onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Update Price</button>
      </form>

      <button onClick={handleDelete}>Delete Product</button>
    </section>
  );
}