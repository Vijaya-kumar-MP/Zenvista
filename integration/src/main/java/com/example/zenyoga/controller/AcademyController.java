package com.example.zenyoga.controller;

import com.example.zenyoga.model.Academy;
import com.example.zenyoga.service.AcademyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    private final AcademyService academyService;

    @Autowired
    public AcademyController(AcademyService academyService) {
        this.academyService = academyService;
    }

    // Get all academies
    @GetMapping
    public ResponseEntity<List<Academy>> getAllAcademies() {
        List<Academy> academies = academyService.getAllAcademies();
        return new ResponseEntity<>(academies, HttpStatus.OK);
    }

    // Get academy by ID
    @GetMapping("/{id}")
    public ResponseEntity<Academy> getAcademyById(@PathVariable int id) {
        Academy academy = academyService.getAcademyById(id);
        return new ResponseEntity<>(academy, HttpStatus.OK);
    }

    // Add a new academy
    @PostMapping
    public ResponseEntity<String> addAcademy(@RequestBody Academy academy) {
        academyService.addAcademy(academy);
        return new ResponseEntity<>("Academy added successfully", HttpStatus.CREATED);
    }

    // Update an existing academy
    @PutMapping("/{id}")
    public ResponseEntity<String> updateAcademy(@PathVariable int id, @RequestBody Academy academy) {
        academyService.updateAcademy(id, academy);
        return new ResponseEntity<>("Academy updated successfully", HttpStatus.OK);
    }

    // Delete an academy by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAcademy(@PathVariable int id) {
        academyService.deleteAcademy(id);
        return new ResponseEntity<>("Academy deleted successfully", HttpStatus.OK);
    }
}
