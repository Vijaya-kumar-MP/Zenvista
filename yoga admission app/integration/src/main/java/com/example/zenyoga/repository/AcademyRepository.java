package com.example.zenyoga.repository;

import com.example.zenyoga.model.Academy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepository extends JpaRepository<Academy, Integer> {
}
