
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/Login/Login";
import CartPage from "./components/CartPage/CartPage";
import { Paymentdetails } from "./components/PaymentPage/paymentDetails";
import {Women} from "./components/ProductPage/components/women";
import { Mens } from "./components/ProductPage/components/men";
function App() {



  return (
    <div className="App">
      <Header />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<Women/>} />
        <Route path="/men" element={<Mens/>}></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Paymentdetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <h1>hello there</h1>
     
      <Footer />
    </div>
  )
}

export default App
