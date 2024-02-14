package com.example.zenyoga.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zenyoga.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile,Integer>{
    
}
