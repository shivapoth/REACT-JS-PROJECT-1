package com.singlesignon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.singlesignon.entity.UserEntity;
import com.singlesignon.service.UserDetailsServiceImpl;

@RestController
@RequestMapping()
public class UserController {
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	@PostMapping("/createUser")
	public String createUser(@RequestBody UserEntity user) {
		String users = userDetailsServiceImpl.createUser(user);
		
		return users;
		
	}

}
