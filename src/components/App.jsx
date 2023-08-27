import React, { useState } from "react";
import { CartProvider } from "../context/CartContext";
import ProductList from "../components/ProductList";
import Header from "./Header";
import Footer from "./Footer";
import CartPage from "./CartPage";
import "../styles/App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCartButtonClick = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Header
        onCartButtonClick={handleCartButtonClick}
        showCart={showCart} // Pass the showCart state to the Header component
      />
      <div className="App">
        {showCart ? <CartPage /> : <ProductList />}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
