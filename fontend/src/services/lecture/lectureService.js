import axios from "axios";
import environment from "../../config.dev";

class LectureService {
    getLectureDetails(lectureFilterModel) {
        console.log(lectureFilterModel);
        return axios.post(`${environment.apiUrl}lecture/getAll`, lectureFilterModel);
    }

    updateLecture(lectureModel) {
        return axios.put(`${environment.apiUrl}lecture/`, lectureModel);
    }

    deleteLecture(id) {
        return axios.delete(`${environment.apiUrl}lecture/` + id);
    }
}

export default new LectureService();