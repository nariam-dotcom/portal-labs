import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, COLORS, DESIGNS } from "../data/options";

export default function ProductList({ products, loading, error }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [color, setColor] = useState("All");
  const [design, setDesign] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesColor = color === "All" || p.color === color;
    const matchesDesign = design === "All" || p.design === design;
    return matchesSearch && matchesCategory && matchesColor && matchesDesign;
  });

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}. Is the server running?</p>;

  return (
    <section>
      <div className="page-header">
        <h2>Products ({filtered.length})</h2>
        <Link to="/products/new" className="btn">+ Add Product</Link>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All categories</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="All">All colors</option>
          {COLORS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={design} onChange={(e) => setDesign(e.target.value)}>
          <option value="All">All designs</option>
          {DESIGNS.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}