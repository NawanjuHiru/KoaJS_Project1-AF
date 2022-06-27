const Router = require("@koa/router");
const { saveUser, updateUser } = require("../api/user.api");

const router = new Router({
    prefix:"/user",
});

router.post("/",saveUser);
router.put("/",updateUser);

module.exports = Router;