import React, { useState } from "react";
import { IProduct } from "../models";
import "./product.css";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(true);
  const BG = !details ? "button_yellow_bg" : "button_blue_bg";
  return (
    <div className="product">
      <img src={product.image} className="product__image" alt="" />
      <p>{product.title}</p>
      <p>
        {product.price}
        <b> $</b>
      </p>
      <button className={BG} onClick={() => setDetails(!details)}>
        {details ? "Hide details" : "Show details"}
      </button>
      {details && (
        <div className="product__details">
          <p>{product.description}</p>
          <p>Rate: {product?.rating?.rate}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
