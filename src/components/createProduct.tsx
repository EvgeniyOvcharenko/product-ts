import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import "./createProduct.css";
import ErrorMessage from "../helpers/errorMessage";

const productData: IProduct = {
  title: "",
  price: +(Math.random() * 100).toFixed(2),
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface ICreateProductProps {
  onCreate: (product: IProduct) => void;
}

function CreateProduct({ onCreate }: ICreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    response.data.rating = {
      rate: +(Math.random() * 10).toFixed(1),
      count: +(Math.random() * 10).toFixed(1),
    };
    onCreate(response.data);
  };

  const changeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="modal_input"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="modal_button">
        Create
      </button>
    </form>
  );
}

export default CreateProduct;
