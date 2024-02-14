package com.example.zenyoga.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.zenyoga.model.BookAdmission;
import com.example.zenyoga.service.BookAdmissionService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@CrossOrigin("*")
@RequestMapping("/api")

public class BookAdmissionController {

    @Autowired

    public BookAdmissionService service;
    @PostMapping("/bookadmission")
    public BookAdmission postDetails(@RequestBody BookAdmission bookadmission){
        return service.addDetails(bookadmission);
    }

    @GetMapping("/bookadmission")
    public List<BookAdmission> getBookAdmissions() {
        return service.getBookAdmissions();
    }

    @PutMapping("/bookadmission/{id}")
    public String updateBookAdmission(@PathVariable int id, @RequestBody BookAdmission bookAdmission) {
        return service.updateById(bookAdmission, id);
    }

    @DeleteMapping("/bookadmission/{id}") 
    public String deleteBookAdmission(@PathVariable int id) {
        return service.deleteBookAdmissionById(id);
    }


}