package com.example.zenyoga.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.BookAdmission;
import com.example.zenyoga.repository.BookAdmissionRepository;
import java.util.List;


@Service
public class BookAdmissionService {
    @Autowired

    public BookAdmissionRepository repo;
    public BookAdmission addDetails(BookAdmission bookadmission){
        return repo.save(bookadmission);
    }

    public List<BookAdmission> getBookAdmissions() {
        return repo.findAll();
    }

    public String deleteBookAdmissionById(int id) {
        repo.deleteById(id);
        return "Admission deleted";
    }

    public String updateById(BookAdmission bookAdmission, int id) {
        BookAdmission existing = repo.findById(id).orElse(null);
        existing.setName(bookAdmission.getName());
        existing.setAge(bookAdmission.getAge());
        existing.setLocation(bookAdmission.getLocation());
        existing.setMobile(bookAdmission.getMobile());
        existing.setAcademy(bookAdmission.getAcademy());
        repo.save(existing);
        return "Admission Updated";

    }


}