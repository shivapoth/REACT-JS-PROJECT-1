package com.singlesignon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.singlesignon.entity.UserEntity;
import com.singlesignon.model.UserModel;
import com.singlesignon.service.UserDetailsServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
//	
//	@PostMapping
//	public ResponseEntity<UserEntity> login(@RequestBody UserModel usermodel){
//		UserEntity user = userDetailsServiceImpl.findUserByEmailAndPassword(usermodel.getEmail(), usermodel.getPassword());
//		return ResponseEntity.ok(user);
//		
//	}
	
	@PostMapping
    public ResponseEntity<UserEntity> login(@RequestBody UserEntity user) {
        UserEntity foundUser = null;

        if (user.getEmail() != null) {
            foundUser = userDetailsServiceImpl.findUserByCredentials(user.getEmail(), user.getPassword());
        } else if (user.getUsername() != null) {
            foundUser = userDetailsServiceImpl.findUserByCredentials(user.getUsername(), user.getPassword());
        }

        if (foundUser != null) {
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
