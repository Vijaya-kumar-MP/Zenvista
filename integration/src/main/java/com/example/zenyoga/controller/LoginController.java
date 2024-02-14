package com.example.zenyoga.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.zenyoga.model.Login;
import com.example.zenyoga.service.LoginService;

@RestController
@CrossOrigin(origins="https://localhost:3000/")
public class LoginController {

    @Autowired

    public LoginService service;
    @PostMapping("/login")
    public Login postDetails(@RequestBody Login login){
        return service.addDetails(login);
    }

}