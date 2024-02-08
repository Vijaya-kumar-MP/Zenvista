package com.example.zenyoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Register {
    @Id
    private int registerID;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    public Register(int registerID, String firstName, String lastName, String email, String password) {
        this.registerID = registerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    
}
