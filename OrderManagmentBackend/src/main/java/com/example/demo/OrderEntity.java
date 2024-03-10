package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OrderEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;
	 private String Product_name;
	 private float price;
	 private Integer Quantity;
	 private String Address;
	 private String Customer_name;
	 
	public OrderEntity() {
	}


	public OrderEntity(Integer id, String name, float price, Integer quantity, String address) {
		super();
		this.id = id;
		this.price = price;
		Quantity = quantity;
		Address = address;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}





	public String getProduct_name() {
		return Product_name;
	}


	public void setProduct_name(String product_name) {
		Product_name = product_name;
	}


	public String getCustomer_name() {
		return Customer_name;
	}


	public void setCustomer_name(String customer_name) {
		Customer_name = customer_name;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public Integer getQuantity() {
		return Quantity;
	}


	public void setQuantity(Integer quantity) {
		Quantity = quantity;
	}


	public String getAddress() {
		return Address;
	}


	public void setAddress(String address) {
		Address = address;
	}


	@Override
	public String toString() {
		return "OrderEntity [id=" + id + ", Product_name=" + Product_name + ", price=" + price + ", Quantity="
				+ Quantity + ", Address=" + Address + ", Customer_name=" + Customer_name + "]";
	}
	
	 
}
