package com.example.zenyoga.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.AdminLogin;
import com.example.zenyoga.repository.AdminLoginRepository;

@Service
public class AdminLoginService {
    @Autowired

    public AdminLoginRepository repo;
    public AdminLogin addDetails(AdminLogin adminlogin){
        return repo.save(adminlogin);
    }


}