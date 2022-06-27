const Router = require("@koa/router");
const { saveStudent, updateStudent, deleteStudent, getStudentDetails, getStudentById } = require("../api/student.api");

const router = new Router({
    prefix:"/student",
});

router.post("/",saveStudent);
router.put("/",updateStudent);
router.delete("/:id",deleteStudent);
router.get("/getAll",getStudentDetails);
router.get("/:id",getStudentById);

module.exports = Router;