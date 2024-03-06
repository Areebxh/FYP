
const Users = require('../models/adminModel')

const adminLogin= async (req, res) => {   
    const result = await Admin.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .then((obj) => {
        if (obj) {
          res.json({ found: true, object: obj });
        } else {
          res.json({ found: false });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  };

  export default adminLogin