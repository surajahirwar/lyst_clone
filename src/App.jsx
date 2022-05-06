// import { useState } from 'react'
import "./App.css";
// import { Notes } from "./components/fetchdata";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/Login/Login";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* <ProductDetail /> */}
      {/* <Notes /> */}

      <h1>hello there</h1>

      <Footer />
    </div>
  );
}

export default App;
