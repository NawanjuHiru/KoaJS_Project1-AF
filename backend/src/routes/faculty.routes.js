const Router = require("@koa/router");
const { saveFaculty, updateFaculty, deleteFaculty, getFacultyDetails } = require("../api/faculty.api");

const router = new Router({
    prefix:"/faculty",
});

router.post("/",saveFaculty);
router.put("/",updateFaculty);
router.delete("/:id",deleteFaculty);
router.get("/getAll",getFacultyDetails);

module.exports = Router;