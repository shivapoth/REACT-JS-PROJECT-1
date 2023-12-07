import React, { useContext, useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialChange = (e) => {
    setCredential(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEmail = (input) => {
    // Simple email validation, you may want to enhance it
    return /\S+@\S+\.\S+/.test(input);
  };

  const navigateTo=useNavigate();
  const register=()=>{
    navigateTo('/register');
  }

  const Verify = async (e) => {
    e.preventDefault();

    try {
      let loginData;

      // Determine whether the entered value is an email or username
      if (isEmail(credential)) {
        loginData = {
          email: credential,
          password: password,
        };
      } else {
        loginData = {
          username: credential,
          password: password,
        };
      }

      const response = await UserService.loginService(loginData);

      // Assuming the API returns a success message or user data
      alert('Login successful for ' + response.data.username);
    } catch (error) {
      // Handle login error
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputCredential" className="col-htmlForm-label">
            Username or Email
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputCredential"
            className="htmlForm-control"
            onChange={handleCredentialChange}
          />
        </div>
      </div>

      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword" className="col-htmlForm-label">
            Password
          </label>
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="inputPassword"
            className="htmlForm-control"
            onChange={handlePasswordChange}
          />
        </div>
      </div>

      <div className="d-flex align-items-stretch">
        <div className="col-auto">
          <button className="btn btn-primary" onClick={Verify}>
            Login
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" onClick={(e)=>register(e)}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
