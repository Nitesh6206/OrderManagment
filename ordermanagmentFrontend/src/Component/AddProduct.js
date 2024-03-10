import React, {useState, useEffect} from 'react'
import {Link, useNavigate,useParams } from 'react-router-dom';
import productServices from '../Services/productServices';

const AddProduct = () => {

    const [productName,setProductName] = useState('')
    const [price, setprice] = useState('')
    const [quantity, setquantity] = useState('')
    const [address, setaddress] = useState('')
    const [customerName, setcustomerName] = useState('')
    const Navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateProduct = (e) => {
        e.preventDefault();

        const product = {productName, price, quantity,address,customerName}

        if(id){
            productServices.updateOrder(id, product).then((response) => {
                Navigate('/')
            }).catch(error => {
                console.log(error)
            })

        }else{
            productServices.createOrder(product).then((response) =>{

                console.log(response.data)
    
                Navigate('/');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        productServices.getOrderById(id).then((response) =>{
           setProductName(response.data.productName)
            setprice(response.data.price)
            setquantity(response.data.quantity)
            setaddress(response.data.address)
            setcustomerName(response.data.customerName)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Product</h2>
        }else{
            return <h2 className = "text-center">Add Product</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-1">
                                    <label className = "form-label">  Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  productname"
                                        name = "ProductName"
                                        className = "form-control"
                                        value = {productName}
                                        onChange = {(e) =>setProductName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-1">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setprice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-1">
                                    <label className = "form-label"> Quantity:</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Quantity"
                                        name = "quantity"
                                        className = "form-control"
                                        value = {quantity}
                                        onChange = {(e) => setquantity(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-1">
                                    <label className = "form-label">  address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  address"
                                        name = "ProductName"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) =>setaddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-1">
                                    <label className = "form-label">  customerName:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter  customerName"
                                        name = "customerName"
                                        className = "form-control"
                                        value = {customerName}
                                        onChange = {(e) =>setcustomerName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateProduct(e)} >Submit </button>
                                <Link to="/orders" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddProduct