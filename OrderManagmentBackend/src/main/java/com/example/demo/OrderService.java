package com.example.demo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

//import java.util.ArrayList;
import java.util.NoSuchElementException;

@Service
@Transactional
public class OrderService {

    @Autowired
    OrderRepository repo;

    public ArrayList<OrderEntity> listAll() {
        return (ArrayList<OrderEntity>) repo.findAll();
    }

    public void save(OrderEntity oe) {
        repo.save(oe);
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }

    public OrderEntity update(Integer id, OrderEntity ord) {
        OrderEntity existingOrder = repo.findById(id)
                                         .orElseThrow(() -> new NoSuchElementException("Order not found with id: " + id));

        existingOrder.setCustomer_name(ord.getCustomer_name());
        existingOrder.setAddress(ord.getAddress());
        existingOrder.setQuantity(ord.getQuantity());
        
        return repo.save(existingOrder);
    }
}
