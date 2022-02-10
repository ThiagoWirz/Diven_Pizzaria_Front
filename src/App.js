import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

import UserContext from "./contexts/userContext";
import CartContext from "./contexts/cartContext";
import "./styles/reset.css";
import "./styles/style.css";
import { useState } from "react";
import CartPage from "./Cart";

function App() {
  const lastUser = JSON.parse(localStorage.getItem("last-user"));
  const [user, setUser] = useState(lastUser);
  const [cart, setCart] = useState([
    { name: "Coca-cola", price: "4,50" },
    { name: "pizza de calabresa", price: "49,90" },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}
export default App;
