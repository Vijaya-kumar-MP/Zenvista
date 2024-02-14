package com.example.zenyoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Course {
         @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int id;
      private String CourseName;
      private String Duration;
      private String CourseTiming;
      private int TotalStudents;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCourseName() {
        return this.CourseName;
    }

    public void setCourseName(String CourseName) {
        this.CourseName = CourseName;
    }

    public String getDuration() {
        return this.Duration;
    }

    public void setDuration(String Duration) {
        this.Duration = Duration;
    }

    public String getCourseTiming() {
        return this.CourseTiming;
    }

    public void setCourseTiming(String CourseTiming) {
        this.CourseTiming = CourseTiming;
    }

    public int getTotalStudents() {
        return this.TotalStudents;
    }

    public void setTotalStudents(int TotalStudents) {
        this.TotalStudents = TotalStudents;
    }

    public Course(int id, String CourseName, String Duration, String CourseTiming, int TotalStudents) {
        this.id = id;
        this.CourseName = CourseName;
        this.Duration = Duration;
        this.CourseTiming = CourseTiming;
        this.TotalStudents = TotalStudents;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", CourseName='" + getCourseName() + "'" +
            ", Duration='" + getDuration() + "'" +
            ", CourseTiming='" + getCourseTiming() + "'" +
            ", TotalStudents='" + getTotalStudents() + "'" +
            "}";
    }
      
}
