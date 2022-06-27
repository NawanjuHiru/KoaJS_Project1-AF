const Router = require("@koa/router");
const { saveCourse } = require("../api/course.api");

const router = new Router({
    prefix:"/course",
});

router.post("/",saveCourse);

module.exports = Router;