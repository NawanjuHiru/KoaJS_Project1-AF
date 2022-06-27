const Router = require("@koa/router");
const { saveFaculty } = require("../api/faculty.api");

const router = new Router({
    prefix:"/faculty",
});

router.post("/",saveFaculty);

module.exports = Router;