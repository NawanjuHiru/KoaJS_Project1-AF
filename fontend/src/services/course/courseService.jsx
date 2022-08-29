import axios from "axios";
import environment from "../../config.dev";

class CourseService {
    getCourseDetails(courseFilterModel) {
        console.log(courseFilterModel);
        return axios.post(`${environment.apiUrl}course/getAll`, courseFilterModel);
    }

    updateCourse(courseModel) {
        return axios.put(`${environment.apiUrl}course/`, courseModel);
    }

    deleteCourse(id) {
        return axios.delete(`${environment.apiUrl}course/` + id);
    }
}

export default new CourseService();