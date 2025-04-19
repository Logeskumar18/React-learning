import axios from "axios";
import { useState, useEffect } from "react";
import "../styles.css"; // 🌟 (We'll create this CSS file)

const RegularFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function apiData() {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    apiData();
  }, []);

  return (
    <div className="container">
      <h1>RegularFetch</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Something went wrong!</p>}
      <div className="card-grid">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p className="description">{item.description}</p>
            <p className="category">Category: {item.category}</p>
            <p className="price">Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegularFetch;
