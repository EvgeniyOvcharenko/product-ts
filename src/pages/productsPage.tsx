import React, { useContext } from "react";
import "./productPage.css";
import Product from "../components/product";
import { useProducts } from "../hooks/products";
import Loader from "../helpers/loader";
import ErrorMessage from "../helpers/errorMessage";
import Modal from "../components/modal";
import CreateProduct from "../components/createProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/modalContext";
function ProductPage() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal onClose={() => close()} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button className="open-modal" onClick={() => open()}>
        +
      </button>
    </div>
  );
}

export default ProductPage;
