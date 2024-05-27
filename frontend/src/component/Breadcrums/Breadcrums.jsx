import React from "react";
import "./Breadcrums.css";

function Breadcrums({ product }) {
  return (
    <div className="Breadcrums">
      Home <span className="arrow">&rarr;</span> SHOP{" "}
      <span className="arrow">&rarr;</span> {product.category}{" "}
      <span className="arrow">&rarr;</span> {product.name}
    </div>
  );
}

export default Breadcrums;
