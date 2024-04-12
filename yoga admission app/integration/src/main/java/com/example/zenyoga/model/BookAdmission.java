package com.example.zenyoga.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class BookAdmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int bookadmissionId;
    private String name;
    private int age;
    private String location;
    private String mobile;
    private String academy;
   
    public int getBookadmissionId() {
        return this.bookadmissionId;
    }
    // public void setBookadmissionId(int bookadmissionId) {
    //     this.bookadmissionId = bookadmissionId;
    // }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getAcademy() {
        return this.academy;
    }
    public void setAcademy(String academy) {
        this.academy = academy;
    }
    

}
