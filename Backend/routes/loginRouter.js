const router = require('express').Router()
//importing the controllers for this route
const auth=require("../middleware/auth")
const { login } = require('../controller/loginController');
const { getAccessToken } = require("../controller/loginController");
const { forgotPassword } = require("../controller/loginController");
const { resetPassword } = require("../controller/loginController");
const {googleLogin}=require("../controller/loginController")


router.post('/login', login)
router.post('/refresh_token', getAccessToken)
router.post('/forgot', forgotPassword)
router.post('/reset',auth,resetPassword)
router.post('/googlelogin',googleLogin)


module.exports = router;
