const Router = require("@koa/router");
const { saveUser, updateUser, deleteUser, getUserDetails, getUserById } = require("../api/user.api");

const router = new Router({
    prefix:"/user",
});

router.post("/",saveUser);
router.put("/",updateUser);
router.delete("/:id",deleteUser);
router.get("/getAll",getUserDetails);
router.get("/:id",getUserById);

module.exports = Router;