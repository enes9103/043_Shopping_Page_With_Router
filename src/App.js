import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Products from "./pages/Product/Products";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details/Details";
import Checkout from "./pages/Checkout";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
            <Route path="/about" exact element={<About />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/user" exact element={<User/>} />
            <Route
              path="products/details/:productId"
              exact
              element={<Details />}
            />
            <Route path="/checkout" exact element={<Checkout />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
