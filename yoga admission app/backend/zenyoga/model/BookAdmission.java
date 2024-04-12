package com.example.zenyoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class BookAdmission {
    @Id
    private int bookadmissionId;
    private String name;
    private int age;
    private String location;
    private String mobile;
    private String yogaType;
    public BookAdmission(int bookadmissionId, String name, int age, String location, String mobile, String yogaType) {
        this.bookadmissionId = bookadmissionId;
        this.name = name;
        this.age = age;
        this.location = location;
        this.mobile = mobile;
        this.yogaType = yogaType;
    }
    

}
