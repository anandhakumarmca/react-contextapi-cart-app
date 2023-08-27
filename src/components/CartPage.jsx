import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css"; // Reusing the same CSS for consistent styling
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon

function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  // Calculate subtotal and total
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal; // You can apply discounts or taxes here if needed

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Cart Items</h2>
        <p>Your cart is empty.</p>
        <FaShoppingCart className="empty-cart-icon" />
        <p>Select home to Add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart Items</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="item-quantity">
              <div className="quantity-controls">
                <select
                  className="item-quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(item.id, parseInt(e.target.value))
                  }
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="item-functionality">
              <div className="item-controls">
                <p className="item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="remove-button-container">
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div className="subtotal">
          <span className="subtotal-label">SUBTOTAL</span>
          <span className="subtotal-value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="shopping">
          <span className="shopping-label">SHOPPING</span>
          <span className="shopping-value">Free</span>
        </div>
        <div className="total">
          <span className="total-label">Total</span>
          <span className="total-value">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
