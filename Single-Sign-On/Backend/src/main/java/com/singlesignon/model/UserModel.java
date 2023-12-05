package com.singlesignon.model;

import lombok.Data;


public class UserModel {

	private String username;
	private String password;
	private String email;
	public String getUername() {
		return username;
	}
	public void setUername(String uername) {
		this.username = uername;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public UserModel(String uername, String password, String email) {
		super();
		this.username = uername;
		this.password = password;
		this.email = email;
	}
	public UserModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
