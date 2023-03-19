import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Shop } from "./pages/shop/shop";

import { Status } from './pages/status';
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Browser } from 'phosphor-react';
import OrderEM from './Employees/OrderEM';
import LoginEM from './Employees/LoginEM';
import Statistics from './Employees/Statistics';
import AlertOrder from './Employees/AlertOrder';
import History from './Employees/History';
import SignUp from './Customer/signup';
import { Checkout } from './pages/checkout/checkout';

import LoginCus from './Customer/LoginCus';

function App() {
  //ไว้ใช้ตอนล็อคอินเข้าของลูกค้า
  /*useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3333/authen", {
      method: "POST", // or 'PUT'
      headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer'+token
    },
    })
    .then(response=> response.json())
    .then(data => {
      if(data.status === 'ok'){
        alert('authen success')
      }else{
          alert('authen failed')
          localStorage.removeItem('token')
          window.location = '/login'
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])*/
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* Customer */}
      <Route path="/login" element={<LoginCus/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/" element={<LoginCus/>} />
      {/* //Employees// */ }
      <Route path="/OrderEM" element={<OrderEM/>} />
      <Route path="/LoginEM" element={<LoginEM/>} />
      <Route path="/Statistics" element={<Statistics/>} />
      <Route path="/AlertOrder" element={<AlertOrder/>} />
      <Route path="/History" element={<History/>} />
    </Routes>
  </Router>
      <ShopContextProvider>
        <Router>
          
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/status" element={<Status />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    
    
  );
}

export default App;
