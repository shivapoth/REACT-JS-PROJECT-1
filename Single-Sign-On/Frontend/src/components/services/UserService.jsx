/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const url = "http://192.168.7.106:8080/login";

class UserService {
  loginService(loginData) {
    return axios.post(url,loginData);
  }
}

export default new UserService();
