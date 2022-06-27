const Router = require("@koa/router");
const { saveCourse, updateCourse, deleteCourse } = require("../api/course.api");

const router = new Router({
    prefix:"/course",
});

router.post("/",saveCourse);
router.put("/",updateCourse);
router.delete("/:id",deleteCourse);

module.exports = Router;