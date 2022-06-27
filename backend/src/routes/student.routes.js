const Router = require("@koa/router");
const { saveStudent, updateStudent } = require("../api/student.api");

const router = new Router({
    prefix:"/student",
});

router.post("/",saveStudent);
router.put("/",updateStudent);

module.exports = Router;