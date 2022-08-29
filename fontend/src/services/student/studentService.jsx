import axios from "axios";
import environment from "../../config.dev";

class StudentService {
    getStudentDetails(studentFilterModel) {
        console.log(studentFilterModel);
        return axios.post(`${environment.apiUrl}student/getAll`, studentFilterModel);
    }

    updateStudent(studentModel) {
        return axios.put(`${environment.apiUrl}student/`, studentModel);
    }

    deleteStudent(id) {
        return axios.delete(`${environment.apiUrl}student/` + id);
    }
}

export default new StudentService();