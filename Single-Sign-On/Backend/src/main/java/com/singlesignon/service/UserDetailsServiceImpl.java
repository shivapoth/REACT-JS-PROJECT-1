package com.singlesignon.service;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.singlesignon.entity.UserEntity;
import com.singlesignon.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService, UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("user not found with username" + username);
		}
		return null;
	}

//	public UserEntity findUserByEmailAndPassword(String email, String password) {
//		UserEntity user =  userRepository.findByEmailAndPassword(email, password);
//		if(user!=null) {
//			return user;
//		}else {
//			return null;
//		}
//	   
//	
//}
	public UserEntity findUserByCredentials(String usernameOremail, String password) {
		UserEntity user = userRepository.findByUsernameAndPassword(usernameOremail, password);
		if (user != null) {
			return user;
		}

		user = userRepository.findByEmailAndPassword(usernameOremail, password);
		if (user != null) {
			return user;
		}

		return null;
	}

	public String createUser(UserEntity user) {
		String message = "";
		UserEntity userExist = userRepository.findByEmail(user.getEmail());
		if (userExist == null) {

			UserEntity createUser = userRepository.save(user);
			if (createUser != null) {
				message = "user created successfully";
			} else {
				message = "user creation failed";
			}
		} else {
			message = "User already exist";
		}
		return message;

	}

}
