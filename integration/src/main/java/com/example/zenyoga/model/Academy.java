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
public class Academy {
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int id;
      private String AcademyName;
      private String Image;
      private String place;
      private Long phonenumber;
      private String Email;
      private String Description;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAcademyName() {
        return this.AcademyName;
    }

    public void setAcademyName(String AcademyName) {
        this.AcademyName = AcademyName;
    }

    public String getImage() {
        return this.Image;
    }

    public void setImage(String Image) {
        this.Image = Image;
    }

    public String getPlace() {
        return this.place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Long getPhonenumber() {
        return this.phonenumber;
    }

    public void setPhonenumber(Long phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getDescription() {
        return this.Description;
    }

    public void setDescription(String Description) {
        this.Description = Description;
    }

    public Academy(int id, String AcademyName, String Image, String place, Long phonenumber, String Email, String Description) {
        this.id = id;
        this.AcademyName = AcademyName;
        this.Image = Image;
        this.place = place;
        this.phonenumber = phonenumber;
        this.Email = Email;
        this.Description = Description;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", AcademyName='" + getAcademyName() + "'" +
            ", Image='" + getImage() + "'" +
            ", place='" + getPlace() + "'" +
            ", phonenumber='" + getPhonenumber() + "'" +
            ", Email='" + getEmail() + "'" +
            ", Description='" + getDescription() + "'" +
            "}";
    }
      
}
