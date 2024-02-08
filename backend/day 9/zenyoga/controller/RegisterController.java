package com.example.zenyoga.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.zenyoga.model.Register;
import com.example.zenyoga.service.RegisterService;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000/")
public class RegisterController {

    @Autowired
    private RegisterService service;

    @PostMapping("/registration")
    public Register postDetails(@RequestBody Register registration) {
        return service.addDetails(registration);
    }

    @GetMapping("/registrations")
    public List<Register> getAllRegistrations() {
        return service.getAllRegistrations();
    }

    @GetMapping("/registration/{id}")
    public Register getRegistrationById(@PathVariable Integer id) {
        return service.getRegistrationById(id);
    }

    @PutMapping("/registration/{id}")
    public Register updateRegistration(@PathVariable Integer id, @RequestBody Register updatedRegistration) {
        return service.updateRegistration(id, updatedRegistration);
    }

    @DeleteMapping("/registration/{id}")
    public void deleteRegistration(@PathVariable Integer id) {
        service.deleteRegistration(id);
    }

    
}