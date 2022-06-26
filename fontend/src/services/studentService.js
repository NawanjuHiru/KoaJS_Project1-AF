import axios from 'axios';

//Be Routes base URL
const STUDENT_API_BASE_URL = "http://localhost:3001/students";

class StudentService {
	
	getStudents() {
		return axios.get(STUDENT_API_BASE_URL);
	}
	
	createStudent(student) {
		return axios.post(STUDENT_API_BASE_URL, student);
	}
	
	getStudentById(student) {
		return axios.get(STUDENT_API_BASE_URL + '/' + id);
	}
	
	updateStudent(student, id) {
		return axios.put(STUDENT_API_BASE_URL + '/' + id, student);
	}
	
	deleteStudent(id) {
		return axios.delete(STUDENT_API_BASE_URL + '/' + id);
	}
}

export default new StudentService();