
import type { User } from '@/models/user.model';
import type { AxiosResponse } from 'axios';
import api from '../config/api.config';
import tokenService from './token.service';


class AuthService {
    
    async login({email, password}: {email: string, password: string}): Promise<User> {

        return api.post(
            '/auth/signin',
            {
                email,
                password
            }
        )
        .then((response: AxiosResponse<User>)=> {
            if(response.data.accessToken)  tokenService.setUser(response.data);
            return response.data;
        })
    }

    logout() {
        tokenService.removeUser();
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