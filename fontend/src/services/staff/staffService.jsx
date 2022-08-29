import axios from "axios";
import environment from "../../config.dev";

class StaffService {
    getStaffDetails(staffFilterModel) {
        console.log(staffFilterModel);
        return axios.post(`${environment.apiUrl}staff/getAll`, staffFilterModel);
    }

    updateStaff(staffModel) {
        return axios.put(`${environment.apiUrl}staff/`, staffModel);
    }

    deleteStaff(id) {
        return axios.delete(`${environment.apiUrl}staff/` + id);
    }
}

export default new StaffService();