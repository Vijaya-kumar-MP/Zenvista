package com.example.zenyoga.service;

import com.example.zenyoga.model.Academy;
import com.example.zenyoga.repository.AcademyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AcademyService {

    private final AcademyRepository academyRepository;

    public AcademyService(AcademyRepository academyRepository) {
        this.academyRepository = academyRepository;
    }

    public List<Academy> getAllAcademies() {
        return academyRepository.findAll();
    }

    public Academy getAcademyById(int id) {
        return academyRepository.findById(id).orElse(null);
    }

    public void addAcademy(Academy academy) {
        academyRepository.save(academy);
    }

    public void updateAcademy(int id, Academy updatedAcademy) {
        Academy academy = academyRepository.findById(id).orElse(null);
        if (academy != null) {
            updatedAcademy.setId(id);
            academyRepository.save(updatedAcademy);
        }
    }

    public void deleteAcademy(int id) {
        academyRepository.deleteById(id);
    }
}
