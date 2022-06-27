const Router = require("@koa/router");
const { saveStudent, updateStudent, deleteStudent } = require("../api/student.api");

const router = new Router({
    prefix:"/student",
});

router.post("/",saveStudent);
router.put("/",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = Router;