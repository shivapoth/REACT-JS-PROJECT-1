package com.singlesignon.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="User")
public class UserEntity {

	@Id
	@Column(name="uid")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	@Column(name="username")
	private String username;
	private String password;
	private String email;

	private String mobilenumber;

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public UserEntity(int userid, String username, String password, String email, String mobilenumber) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.email = email;
		this.mobilenumber = mobilenumber;
	}

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

}
