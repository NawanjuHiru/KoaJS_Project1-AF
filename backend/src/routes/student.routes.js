const Router = require("@koa/router");
const { saveStudent, updateStudent, deleteStudent, getStudentDetails } = require("../api/student.api");

const router = new Router({
    prefix:"/student",
});

router.post("/",saveStudent);
router.put("/",updateStudent);
router.delete("/:id",deleteStudent);
router.get("/getAll",getStudentDetails);

module.exports = Router;