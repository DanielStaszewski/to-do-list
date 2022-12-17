import type { AppState } from '@/store';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Store } from 'vuex';
import axiosInstance from '../config/api.config';
import tokenService from "../services/token.service";

const setup = (store: Store<AppState>) => {

    axiosInstance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            const token = tokenService.getLocalAccessToken();
            if(token){
                config.headers!["x-access-token"] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        async (err) => {
            const originalConfig = err.config;

            if(originalConfig.url !== "/auth/signin" && err.response){
                //Access token was expired
                if(err.response.status === 401 && !originalConfig._retry){
                    originalConfig._retry = true;

                    try {
                        const rs = await axiosInstance.post("/auth/refreshToken", {
                            refreshToken: tokenService.getLocalRefreshToken()
                        });
    
                        const { accessToken } = rs.data;
    
                        store.dispatch('auth/refreshToken', accessToken);
                        tokenService.updateLocalAccessToken(accessToken);
    
                        return axiosInstance(originalConfig)
    
                    } catch(_error) {
                        return Promise.reject(_error);
                    }
                }
            } 
            return Promise.reject(err);
        }
    );
}

export default setup;
