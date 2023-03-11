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
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
