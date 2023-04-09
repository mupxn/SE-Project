import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Shop } from "./pages/shop/shop";

import { Status } from './pages/status';
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from './pages/checkout/checkout';
import { Browser } from 'phosphor-react';
import OrderEM from './Employees/OrderEM';
import LoginEM from './Employees/LoginEM';
import Statistics from './Employees/Statistics';
import AlertOrder from './Employees/AlertOrder';
import History from './Employees/History';
import SignUp from './Customer/signup';
import OrderDetails from './Employees/OrderDetails';
import LoginCus from './Customer/LoginCus';
import ShopCus from './Customer/shop-page';
import { HistoryCus } from './pages/history';
import { useState, useEffect } from "react";


  // var UserID ;
  // const setUserID = (id) =>{
  //   UserID = id;
  //   //console.log(UserID)
  // }


function App() {
  const [UserID, setUserID] = useState(0);
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* Customer */}
      
      <Route path="/shop-page" element={<ShopCus/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<LoginCus UserID = {UserID} setUserID = {setUserID} />} />
      {/* //Employees// */ }
      <Route path="/OrderEM" element={<OrderEM/>} />
      <Route path="/LoginEM" element={<LoginEM/>} />
      <Route path="/Statistics" element={<Statistics/>} />
      <Route path="/AlertOrder" element={<AlertOrder/>} />
      <Route path="/History" element={<History/>} />
      <Route path="/OrderDetails" element={<OrderDetails/>} />
    </Routes>
  </Router>
     <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/shop" element={<Shop UserID = {UserID} setUserID = {setUserID}/>} />
            <Route path="/history-customer" element={<HistoryCus UserID = {UserID} setUserID = {setUserID}/>} />
            <Route path="/cart"  element={<Cart UserID = {UserID} setUserID = {setUserID} />} />
            <Route path="/checkout" element={<Checkout UserID = {UserID} setUserID = {setUserID}/>} />
          </Routes>
        </Router>
        </ShopContextProvider>
    </div>
  );
}

export default App;
