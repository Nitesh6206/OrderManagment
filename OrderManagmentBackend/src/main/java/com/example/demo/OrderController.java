package com.example.demo;

import java.util.ArrayList;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class OrderController {
    
    @Autowired
    OrderService os;

    @GetMapping("/orders")
    public ArrayList<OrderEntity> list() {
        return os.listAll();
    }

    @PostMapping("/orders")
    public ResponseEntity<?> add(@RequestBody OrderEntity oe) {
        os.save(oe);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        os.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/orders/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @RequestBody OrderEntity ord) {
        try {
            OrderEntity updatedOrder = os.update(id, ord);
            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

