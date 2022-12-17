import api from '../config/api.config';


class UserService {
  getPublicContent() {
    return api.get('/test/all');
  }

  getUserBoard() {
    return api.get('/test/user');
  }

  getModeratorBoard() {
    return api.get('/test/mod');
  }

  getAdminBoard() {
    return api.get('/test/admin');
  }

  uploadUserImage(formData: FormData) {
    return api.post('/user/uploadImage', formData, {headers: {
      "Content-Type": "multipart/form-data"
    }});
  }
}

export default new UserService();