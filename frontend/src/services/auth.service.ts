
import type { AxiosResponse } from 'axios';
import api from '../config/api.config';


class AuthService {
    
    async login(user: any): Promise<{accessToken: string}> {

        return api.post(
            '/auth/signin',
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
        return api.post('/auth/signup', {
          name: user.name,
          surname: user.surname,
          email: user.email,
          password: user.password
        });
    }

}

export default new AuthService();