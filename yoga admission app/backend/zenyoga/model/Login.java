package com.example.zenyoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Login {
    @Id
    private int loginId;
    private String email;
    private String password;
    public Login(int loginId, String email, String password) {
        this.loginId = loginId;
        this.email = email;
        this.password = password;
    }
    
}
