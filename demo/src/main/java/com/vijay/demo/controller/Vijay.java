package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Vijay {
    @GetMapping("/")
    public String index() {
        return "hello yuvan";
    }
    
}