
import './App.css';
import React from 'react';
import Order from './Component/Order';
import FooterComponent from './Component/footerComponent';
import HeaderComponent from './Component/headerComponent';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddProduct from './Component/AddProduct';


function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
     <Routes>
    <Route path="/" element={<Order />} />
    <Route path="/orders" element={<Order />} />
    <Route path="/add-product" element={<AddProduct />} />
    <Route path="/edit-product" element={<AddProduct />} />
</Routes>

      
      <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
