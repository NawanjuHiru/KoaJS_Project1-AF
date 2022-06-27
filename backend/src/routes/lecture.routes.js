const Router = require("@koa/router");
const { saveLecture, updateLecture, deleteLecture, getLectureDetails } = require("../api/lecture.api");

const router = new Router({
    prefix:"/lecture",
});

router.post("/",saveLecture);
router.put("/",updateLecture);
router.delete("/:id",deleteLecture);
router.get("/getAll",getLectureDetails);

module.exports = Router;