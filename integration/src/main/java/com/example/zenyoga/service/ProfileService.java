package com.example.zenyoga.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.zenyoga.model.Profile;
import com.example.zenyoga.repository.ProfileRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository repo;

    public List<Profile> getAllRegistrations() {
        return repo.findAll();
    }

    public Profile getRegistrationById(Integer id) {
        Optional<Profile> optionalRegistration = repo.findById(id);
        return optionalRegistration.orElse(null);
    }

    public Profile addDetails(Profile registration) {
        return repo.save(registration);
    }

    public Profile updateRegistration(Integer id, Profile updatedRegistration) {
        Optional<Profile> optionalRegistration = repo.findById(id);
        if (optionalRegistration.isPresent()) {
            Profile existingRegistration = optionalRegistration.get();
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