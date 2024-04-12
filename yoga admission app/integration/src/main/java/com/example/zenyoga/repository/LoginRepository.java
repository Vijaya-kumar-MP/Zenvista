package com.example.zenyoga.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zenyoga.model.Login;

public interface LoginRepository extends JpaRepository<Login,Integer>{
    
}
