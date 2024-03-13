const router = require('express').Router()
//importing the controllers for this route
const auth=require("../middleware/auth")
const {hostelListing } = require('../controller/hostelController');

router.post('/listing',auth, hostelListing);



module.exports = router;