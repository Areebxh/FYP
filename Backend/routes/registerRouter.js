const router = require('express').Router()
//importing the controllers for this route

const { register,activateEmail } = require('../controller/registerController');


router.post('/register',register);
router.post('/activate',activateEmail);

module.exports = router;