package com.example.zenyoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class AdminLogin {
    @Id
    private int adminloginId;
    private String username;
    private String password;
    public AdminLogin(int adminloginId, String username, String password) {
        this.adminloginId = adminloginId;
        this.username = username;
        this.password = password;
    }
    
}

