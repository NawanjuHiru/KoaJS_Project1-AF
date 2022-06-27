const Router = require("@koa/router");
const { saveCourse, updateCourse } = require("../api/course.api");

const router = new Router({
    prefix:"/course",
});

router.post("/",saveCourse);
router.put("/",updateCourse);

module.exports = Router;