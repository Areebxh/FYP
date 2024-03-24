const router = require('express').Router()
const uploadImage = require('../middleware/upload')
const { uploadAvatar } = require('../controller/uploadImgController');
const auth = require('../middleware/auth')

router.post('/upload_avatar', uploadImage, uploadAvatar)

module.exports = router