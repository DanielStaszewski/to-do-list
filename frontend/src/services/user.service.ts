import axios from 'axios';
import authHeader from './auth-header.service';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'test/all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'test/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'test/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'test/admin', { headers: authHeader() });
  }

  uploadUserImage(formData: FormData) {
    return axios.post(API_URL + 'user/uploadImage', formData, { headers: authHeader() });
  }
}

export default new UserService();