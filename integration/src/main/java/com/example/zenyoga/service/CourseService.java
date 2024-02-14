package com.example.zenyoga.service;

import com.example.zenyoga.model.Course;
import com.example.zenyoga.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(int id) {
        return courseRepository.findById(id).orElse(null);
    }

    public void addCourse(Course course) {
        courseRepository.save(course);
    }

    public void updateCourse(int id, Course updatedCourse) {
        Course course = courseRepository.findById(id).orElse(null);
        if (course != null) {
            updatedCourse.setId(id);
            courseRepository.save(updatedCourse);
        }
    }

    public void deleteCourse(int id) {
        courseRepository.deleteById(id);
    }
}
