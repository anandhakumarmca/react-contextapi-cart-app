import React from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

const Header = ({ onCartButtonClick, showCart }) => {
  const { cart } = useCart();

  return (
    <header className="header">
      <nav className="nav">
        <p className="title">My Shopping Cart</p>
        <div className="cart">
          <button className="cart-button" onClick={onCartButtonClick}>
            {showCart ? (
              <FaArrowLeft className="cart-icon" />
            ) : (
              <FaShoppingCart className="cart-icon" />
            )}
            <span className="cart-name">{showCart ? "Home" : "Cart"}</span>
            {showCart ? "" : <span className="cart-count">{cart.length}</span>}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
