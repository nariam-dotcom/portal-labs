import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // READ
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // CREATE
  function addProduct(newProduct) {
    return fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((saved) => setProducts([...products, saved]));
  }

  // UPDATE 
  function updateProduct(id, changes) {
    return fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changes),
    })
      .then((res) => res.json())
      .then((updated) =>
        setProducts(products.map((p) => (p.id === id ? updated : p)))
      );
  }

  // DELETE
  function deleteProduct(id) {
    return fetch(`${API}/${id}`, { method: "DELETE" }).then(() =>
      setProducts(products.filter((p) => p.id !== id))
    );
  }

  return { products, loading, addProduct, updateProduct, deleteProduct };
}