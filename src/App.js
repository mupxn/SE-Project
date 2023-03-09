import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Browser } from 'phosphor-react';
import OrderEM from './Employees/OrderEM';
import LoginEM from './Employees/LoginEM';
import Statistics from './Employees/Statistics';
import AlertOrder from './Employees/AlertOrder';
import History from './Employees/History';

import LoginCus from './Customer/LoginCus';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Router>
      <Routes>
        {/* Customer */}
      <Route path="/Login-Customer" element={<LoginCus/>} />
      {/* //Employees// */ }
      <Route path="/OrderEM" element={<OrderEM/>} />
      <Route path="/LoginEM" element={<LoginEM/>} />
      <Route path="/Statistics" element={<Statistics/>} />
      <Route path="/AlertOrder" element={<AlertOrder/>} />
      <Route path="/History" element={<History/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
