import axios, { type AxiosResponse } from 'axios'

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
    
    async login(user: any): Promise<{accessToken: string}> {

        return axios.post(
            API_URL + 'signin',
            {
                email: user.email,
                password: user.password
            }
        )
        .then((response: AxiosResponse<{accessToken: string}>)=> {
            if(response.data.accessToken)  localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user: any) {
        return axios.post(API_URL + 'signup', {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: user.password
        });
    }

}

export default new AuthService();