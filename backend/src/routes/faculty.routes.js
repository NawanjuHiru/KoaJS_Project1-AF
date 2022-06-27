const Router = require("@koa/router");
const { saveFaculty, updateFaculty, deleteFaculty } = require("../api/faculty.api");

const router = new Router({
    prefix:"/faculty",
});

router.post("/",saveFaculty);
router.put("/",updateFaculty);
router.delete("/:id",deleteFaculty);

module.exports = Router;