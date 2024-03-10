import React, { useEffect, useState } from 'react';
import productService from '../Services/productServices';
import { Link } from 'react-router-dom';

export default function Order(props) {
  // Define the structure of the order state
  const [order, setOrder] = useState([]);

  useEffect(() => {

    getAllOrder();
}, [])

const getAllOrder = () => {
    productService.getAllOrders().then((response) => {
        setOrder(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
}
const deleteOrder = (ordereId) => {
  productService.deleteOrder(ordereId).then((response) =>{
   getAllOrder();

  }).catch(error =>{
      console.log(error);
  })
   
}

  return (
    <div className='container'>
      <h1>List of Orders</h1>
      <Link to="/add-product" className="btn  col-md-2 btn-primary nb-2">Add Product</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Customer Name</th>
            <th>Action</th>
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
                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${order.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteOrder(order.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
