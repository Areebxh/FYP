const { adminLogin } = require('../controller/adminController');


router.post('/adminlogin', adminLogin);

module.exports = router;