import React from "react";
import { useCart } from "../context/CartContext";
import productsData from "../data/products.json";
import "../styles/ProductList.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductList() {
  const { addToCart, isItemInCart, removeFromCart } = useCart();

  return (
    <div className="container">
      <div className="row product-row">
        {productsData.products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card product-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                {isItemInCart(product.id) ? (
                  <button onClick={() => removeFromCart(product.id)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
