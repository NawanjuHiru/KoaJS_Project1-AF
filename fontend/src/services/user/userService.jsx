import axios from "axios";
import environment from "../../config.dev";

class UserService {
    getUserDetails(userFilterModel) {
        console.log(userFilterModel);
        return axios.post(`${environment.apiUrl}user/getAll`, userFilterModel);
    }

    updateUser(userModel) {
        return axios.put(`${environment.apiUrl}user/`, userModel);
    }

    deleteUser(id) {
        return axios.delete(`${environment.apiUrl}user/` + id);
    }
}

export default new UserService();