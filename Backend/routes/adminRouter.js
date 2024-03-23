const router = require('express').Router()
const { adminLogin } = require('../controller/adminController');
const { getHostels,approveHostel,rejectHostel,deleteHostel} = require('../controller/adminController');


// const adminLogin = () => {
//     res.send("ok")
// }

router.post('/adminlogin', adminLogin);
router.post('/gethostel',getHostels)
router.post('/deletehostel',deleteHostel)
router.post('/approvehostel',approveHostel)
router.post('/rejecthostel',rejectHostel)




module.exports = router;