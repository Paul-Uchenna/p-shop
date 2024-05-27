import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../component/Breadcrums/Breadcrums";
import ProductDisplay from "../component/ProductDisplay/ProductDisplay";
import { ShopContext } from "../context/ShopContext";
import DescriptionBox from "../component/DescriptionBox/DescriptionBox";
import RelatedProducts from "../component/RealtedProducts/RelatedProducts";

function Products() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((items) => items.id === Number(productId));

  if (!product) {
    return (
      <div style={{ marginTop: "300px", zIndex: 1000, fontSize: ["54px"] }}>
        Product not found
      </div>
    );
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Products;
