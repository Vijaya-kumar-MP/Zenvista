package com.example.zenyoga.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.zenyoga.model.BookAdmission;
import com.example.zenyoga.service.BookAdmissionService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class BookAdmissionController {

    @Autowired

    public BookAdmissionService service;
    @PostMapping("/bookadmission")
    public BookAdmission postDetails(@RequestBody BookAdmission bookadmission){
        return service.addDetails(bookadmission);
    }

}