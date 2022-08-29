import axios from "axios";
import environment from "../../config.dev";

class FacultyService {
    saveFaculty(facultyModel) {
        return axios.post(`${environment.apiUrl}faculty`,facultyModel);
    }

    getFacultyDetails(facultyFilterModel) {
        console.log(facultyFilterModel);
        return axios.post(`${environment.apiUrl}faculty/getAll`, facultyFilterModel);
    }

    updateFaculty(facultyModel) {
        return axios.put(`${environment.apiUrl}faculty/`, facultyModel);
    }

    deleteFaculty(id) {
        return axios.delete(`${environment.apiUrl}faculty/` + id);
    }
}

export default new FacultyService();