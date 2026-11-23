import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES, COLORS, DESIGNS } from "../data/options";

export default function ProductForm({ addProduct }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: CATEGORIES[0],
    color: COLORS[0],
    design: DESIGNS[0],
    description: "",
    image: "",
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
      <input name="name" placeholder="Product name" value={form.name} onChange={handleChange} required />
      <input name="price" type="number" min="0" placeholder="Price" value={form.price} onChange={handleChange} required />

      <select name="category" value={form.category} onChange={handleChange}>
        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select name="color" value={form.color} onChange={handleChange}>
        {COLORS.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <select name="design" value={form.design} onChange={handleChange}>
        {DESIGNS.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>

      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  );
}