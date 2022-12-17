import authHeader from './auth-header.service';
import api from '../config/api.config';


class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get('/test/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return api.get('/test/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return api.get('/test/admin', { headers: authHeader() });
  }

  uploadUserImage(formData: FormData) {
    return api.post('/user/uploadImage', formData, { headers: authHeader() });
  }
}

export default new UserService();