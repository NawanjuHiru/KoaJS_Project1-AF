const Router = require("@koa/router");
const { saveLecture, updateLecture, deleteLecture } = require("../api/lecture.api");

const router = new Router({
    prefix:"/lecture",
});

router.post("/",saveLecture);
router.put("/",updateLecture);
router.delete("/:id",deleteLecture);

module.exports = Router;