const Router = require("@koa/router");
const { saveStudent } = require("../api/student.api");

const router = new Router({
    prefix:"/student",
});

router.post("/",saveStudent);

module.exports = Router;