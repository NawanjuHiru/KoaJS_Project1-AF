const Router = require("@koa/router");
const { saveStaff, updateStaff, deleteStaff, getStaffDetails, getStaffById } = require("../api/staff.api");

const router = new Router({
    prefix:"/staff",
});

router.post("/", saveStaff);
router.put("/", updateStaff);
router.delete("/:id", deleteStaff);
router.get("/getAll", getStaffDetails);
router.get("/:id",getStaffById);

module.exports = Router;