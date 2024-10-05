// 이 유틸은 rest api 통신을 위한 클래스입니다.
import axios from 'axios';
export default class RestApiHelper {
    static async get(url: string, params: any) {
        return axios.get(url, { params });
    }
    
    static async post(url: string, data: any) {
        return axios.post(url, data);
    }
    
    static async put(url: string, data: any) {
        return axios.put(url, data);
    }
    
    static async delete(url: string, params: any) {
        return axios.delete(url, { params });
    }    
}



