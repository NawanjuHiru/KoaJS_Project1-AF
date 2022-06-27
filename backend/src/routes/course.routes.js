const Router = require("@koa/router");
const { saveCourse, updateCourse, deleteCourse, getCourseDetails } = require("../api/course.api");

const router = new Router({
    prefix:"/course",
});

router.post("/",saveCourse);
router.put("/",updateCourse);
router.delete("/:id",deleteCourse);
router.get("/getAll",getCourseDetails);

module.exports = Router;