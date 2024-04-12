package com.example.zenyoga.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.zenyoga.model.AdminLogin;
import com.example.zenyoga.service.AdminLoginService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class AdminLoginController {

    @Autowired

    public AdminLoginService service;
    @PostMapping("/adminlogin")
    public AdminLogin postDetails(@RequestBody AdminLogin adminlogin){
        return service.addDetails(adminlogin);
    }

}