const Router = require("@koa/router");
const { saveLecture } = require("../api/lecture.api");

const router = new Router({
    prefix:"/lecture",
});

router.post("/",saveLecture);

module.exports = Router;