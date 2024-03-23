
const Admin = require('../models/adminModel')
const Hostel=require('../models/hostelModel')

const adminLogin = async (req, res) => {
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



const getHostels=  async (req, res) => {
  const result = await Hostel.find({}, { _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
};

const deleteHostel= async (req, res) => {
  const result = await Hostel.deleteOne({
    hostelid: req.body.hostelid,
  });
  if (result.deletedCount == 1) {
    console.log("Hostel deleted");
  } else {
    console.log("Hostel not found");
  }
  res.send({ status: result });
};

const rejectHostel= async (req, res) => {
  await Hostel.updateOne({ hostelid: req.body.hostelid }, { isApproved: false })
    .then((response) => {
      console.log(response);
      res.send({ rejected: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
};

const approveHostel= async (req, res) => {
  await Hostel.updateOne({ hostelid: req.body.hostelid }, { isApproved: true })
    .then((response) => {
      console.log(response);
      res.send({ approved: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
};







module.exports = { adminLogin ,getHostels,deleteHostel,rejectHostel,approveHostel}
