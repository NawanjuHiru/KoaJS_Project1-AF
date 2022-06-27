const Router = require("@koa/router");
const { saveLecture, updateLecture, deleteLecture, getLectureDetails, getLectureById } = require("../api/lecture.api");

const router = new Router({
    prefix:"/lecture",
});

router.post("/",saveLecture);
router.put("/",updateLecture);
router.delete("/:id",deleteLecture);
router.get("/getAll",getLectureDetails);
router.get("/:id",getLectureById);

module.exports = Router;