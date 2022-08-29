import axios from "axios";
import environment from "../../config.dev";

class AuthService {
    login(loginModel) {
        return axios.post(`${environment.apiUrl}auth`, loginModel);
    }

    saveUser(userModel) {
        return axios.post(`${environment.apiUrl}user`, userModel);
    }
}

export default new AuthService();