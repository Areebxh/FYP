const router = require('express').Router()
const auth = require("../middleware/auth")
//importing the controllers for this route
const { getUserInfo } = require('../controller/userController');
const { logout } = require('../controller/userController');
const { updateUser } = require('../controller/userController');
const { getUsers, deleteUser, blockUser, unBlockUser } = require('../controller/userController')


router.get('/userinfo', auth, getUserInfo)
router.put('/update', auth, updateUser)
router.post('/logout', logout)
router.post('/getusers', getUsers)
router.post('/deleteUser', deleteUser)
router.post('/block', blockUser)
router.post("/unblock", unBlockUser)


module.exports = router;
