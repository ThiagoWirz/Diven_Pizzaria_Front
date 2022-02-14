import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import UserContext from "./contexts/userContext";
import CartContext from "./contexts/cartContext";
import "./styles/reset.css";
import "./styles/style.css";
import { useState } from "react";
import CartPage from "./Pages/Cart";
import Menu from "./Pages/Menu";
import Sales from "./Pages/Sales";

function App() {
  const lastUser = JSON.parse(localStorage.getItem("last-user"));
  const [user, setUser] = useState(lastUser);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </CartContext.Provider>
  );
}
export default App;
