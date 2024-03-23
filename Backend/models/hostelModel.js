
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HostelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Assuming there's a User model for hostel owners
    required: true,
  },

  isApproved: {
    type: Boolean,
    //default: false,
  },
  
});

module.exports = mongoose.model("Hostel", HostelSchema)
