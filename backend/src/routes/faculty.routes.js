const Router = require("@koa/router");
const { saveFaculty, updateFaculty } = require("../api/faculty.api");

const router = new Router({
    prefix:"/faculty",
});

router.post("/",saveFaculty);
router.put("/",updateFaculty);

module.exports = Router;