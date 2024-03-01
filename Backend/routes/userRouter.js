const router = require('express').Router()
const auth = require("../middleware/auth")
//importing the controllers for this route
const { getUserInfo } = require('../controller/userController');
const { logout } = require('../controller/userController');
const { updateUser } = require('../controller/userController');


router.get('/userinfo', auth, getUserInfo)
router.patch('/update', auth, updateUser)
router.post('/logout', logout)

module.exports = router;
