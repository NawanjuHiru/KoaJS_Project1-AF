const Router = require("@koa/router");
const { saveLecture, updateLecture } = require("../api/lecture.api");

const router = new Router({
    prefix:"/lecture",
});

router.post("/",saveLecture);
router.put("/",updateLecture);

module.exports = Router;