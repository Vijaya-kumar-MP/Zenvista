package com.example.zenyoga.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.Login;
import com.example.zenyoga.repository.LoginRepository;

@Service
public class LoginService {
    @Autowired

    public LoginRepository repo;
    public Login addDetails(Login login){
        return repo.save(login);
    }


}