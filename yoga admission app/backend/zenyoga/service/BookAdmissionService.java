package com.example.zenyoga.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.BookAdmission;
import com.example.zenyoga.repository.BookAdmissionRepository;

@Service
public class BookAdmissionService {
    @Autowired

    public BookAdmissionRepository repo;
    public BookAdmission addDetails(BookAdmission bookadmission){
        return repo.save(bookadmission);
    }


}