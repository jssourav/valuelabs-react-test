import "./App.css";
import { useEffect, useState } from "react";
import Products from "./components/Products";

function App() {
  const [productData, setProductData] = useState(null);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();

    setProductData(json.products);

    return json;
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!productData) return <h1>Loading</h1>;

  return (
    <>
      <h1>ValueLabs Test</h1>

      <div>
        {productData.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default App;
