import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ addProduct }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", price: "", category: "", description: "", image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addProduct({ ...form, price: Number(form.price) }).then(() =>
      navigate("/products")
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Product</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}