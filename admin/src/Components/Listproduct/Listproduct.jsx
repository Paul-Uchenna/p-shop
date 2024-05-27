import "./Listproduct.css";
import crossIcon from "../../assets/AdminPanelAssets/cross_icon.png";

import { useEffect, useState } from "react";

function Listproduct() {
  const [allproducts, setallproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:5700/allproducts")
      .then((res) => res.json())
      .then((data) => setallproducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:5700/removeproduct", {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  return (
    <div className="listproduct">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <div
              key={index}
              className="listproduct-format-main listproduct-format"
            >
              <img
                src={product.image}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => {
                  remove_product(product.id);
                }}
                src={crossIcon}
                alt=""
                className="listproduct-removeIcon"
              />
            </div>
          );
        })}
        <hr />
      </div>
    </div>
  );
}

export default Listproduct;