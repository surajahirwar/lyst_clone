import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CartPage from "./components/CartPage/CartPage";
import { Home } from "./components/HomePage/HomePage";
import { Paymentdetails } from "./components/PaymentPage/paymentDetails";
import { Women } from "./components/ProductPage/components/women";
import { Mens } from "./components/ProductPage/components/men";
import { Address } from "./components/PaymentPage/address";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/address" element={<Address />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/men" element={<Mens />} />
        <Route path="/product/women" element={<Women />} />
        <Route path="/payment" element={<Paymentdetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* <h1>hello there</h1> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
