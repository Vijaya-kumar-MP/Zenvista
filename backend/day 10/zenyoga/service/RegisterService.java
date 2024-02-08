package com.example.zenyoga.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.Register;
import com.example.zenyoga.repository.RegisterRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository repo;

    public List<Register> getAllRegistrations() {
        return repo.findAll();
    }

    public Register getRegistrationById(Integer id) {
        Optional<Register> optionalRegistration = repo.findById(id);
        return optionalRegistration.orElse(null);
    }

    public Register addDetails(Register registration) {
        return repo.save(registration);
    }

    public Register updateRegistration(Integer id, Register updatedRegistration) {
        Optional<Register> optionalRegistration = repo.findById(id);
        if (optionalRegistration.isPresent()) {
            Register existingRegistration = optionalRegistration.get();
            // Update the existing registration with the new details
            existingRegistration.setFirstName(updatedRegistration.getFirstName());
            existingRegistration.setLastName(updatedRegistration.getLastName());
            existingRegistration.setEmail(updatedRegistration.getEmail());
            // ... update other fields as needed
            return repo.save(existingRegistration);
        }
        return null; // Handle case where registration with the given ID is not found
    }

    public void deleteRegistration(Integer id) {
        repo.deleteById(id);
    }
}