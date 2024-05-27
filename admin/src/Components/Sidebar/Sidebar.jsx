// import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import addproduct from "../../assets/AdminPanelAssets/Product_Cart.svg";
import productlist from "../../assets/AdminPanelAssets/Product_list_icon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={addproduct} alt="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={productlist} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
