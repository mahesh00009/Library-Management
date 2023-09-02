

let {Router} = require("express")
const {SignupUser, LoginUser, SendAllUsers} = require("./Controllers/UserControllers")

const router = Router()


router.post("/signup", SignupUser)
router.post("/login", LoginUser)
router.get("/allUsers", SendAllUsers)

module.exports = router


