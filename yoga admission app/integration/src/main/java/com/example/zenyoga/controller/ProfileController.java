package com.example.zenyoga.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.zenyoga.model.Profile;
import com.example.zenyoga.service.ProfileService;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:3000/")
public class ProfileController {

    @Autowired
    private ProfileService service;

    @PostMapping("/profile")
    public Profile postDetails(@RequestBody Profile registration) {
        return service.addDetails(registration);
    }

    @GetMapping("/profiles")
    public List<Profile> getAllRegistrations() {
        return service.getAllRegistrations();
    }

    @GetMapping("/profile/{id}")
    public Profile getRegistrationById(@PathVariable Integer id) {
        return service.getRegistrationById(id);
    }

    @PutMapping("/profle/{id}")
    public Profile updateRegistration(@PathVariable Integer id, @RequestBody Profile updatedRegistration) {
        return service.updateRegistration(id, updatedRegistration);
    }

    @DeleteMapping("/profile/{id}")
    public void deleteRegistration(@PathVariable Integer id) {
        service.deleteRegistration(id);
    }

    
}