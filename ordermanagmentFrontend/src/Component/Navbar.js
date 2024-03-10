import React, { useEffect, useState } from 'react';
import productService from '../Services/productServices';

export default function Navbar(props) {
  // Define the structure of the order state
  const [order, setOrder] = useState([]);

  useEffect(() => {

    getAllOrder();
}, [])

const getAllOrder = () => {
    productService.getAllOrder().then((response) => {
        setOrder(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}

  return (
    <div className='container'>
      <h1>List of Orders</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {
            order.map(order =>
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product_name}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.customer_name}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
