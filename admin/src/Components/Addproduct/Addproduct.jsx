import "./Addproduct.css";
import upload from "../../assets/AdminPanelAssets/upload_area.svg";
import { useState } from "react";

function Addproduct() {
  const [image, setimage] = useState(false);

  const [productDetails, setproductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setimage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setproductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const Add_product = async () => {
    try {
      let product = productDetails;

      let formData = new FormData();
      formData.append("product", image);

      let uploadResponse = await fetch("http://localhost:5700/upload", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      let resData = await uploadResponse.json();

      if (resData.success) {
        product.image = resData.image_url;
        console.log("Image URL:", resData.image_url);
        let addProductResponse = await fetch(
          "http://localhost:5700/addproduct",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        if (!addProductResponse.ok) {
          throw new Error("Failed to add product");
        }

        let data = await addProductResponse.json();

        if (data.success) {
          alert("Product added");
        } else {
          alert("Failed to add product");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemsfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemsfield">
          <p>Price</p>
          <input
            type="text"
            value={productDetails.old_price}
            onChange={changeHandler}
            name="old_price"
            placeholder="type here"
          />
        </div>
        <div className="addproduct-itemsfield">
          <p>Offer Price</p>
          <input
            type="text"
            value={productDetails.new_price}
            onChange={changeHandler}
            name="new_price"
            placeholder="type here"
          />
        </div>
      </div>

      <div className="addproduct-itemsfield">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="addproduct-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-itemsfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={Add_product} className="addproduct-button">
        ADD
      </button>
    </div>
  );
}

export default Addproduct;
