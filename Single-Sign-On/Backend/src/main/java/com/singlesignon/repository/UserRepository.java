package com.singlesignon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.singlesignon.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer>{
	
	public UserEntity findByUsername(String username);
	
	public UserEntity findByEmail(String email);
	
	public UserEntity findByEmailAndPassword(String email, String password);
	
	public UserEntity  findByUsernameAndPassword(String username, String password);
	
}
