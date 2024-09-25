import React from "react";

const Products = ({ product }) => {
  return (
    <div className="dispalyProduct">
      <div style={{ width: "100px" }}>
        <img
          src={product.images[0]}
          alt="product"
          style={{ width: "100px", "align-content": "center" }}
        />
      </div>
      <h3 style={{ width: "500px", "align-content": "center" }}>
        {product.title}
      </h3>
      <div style={{ width: "1000px" }}>{product.description}</div>
    </div>
  );
};

export default Products;
