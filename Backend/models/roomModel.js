const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hostel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hostel', // Reference to the Hostel model
    required: true,
  },
  roomNumber: {
    type: String,
    required: [true, 'Please enter the room number!'],
    trim: true,
  },
  capacity: {
    type: Number,
    required: [true, 'Please enter the room capacity!'],
  },
  availableSeats: {
    type: Number,
    required: [true, 'Please enter the number of available seats!'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter the room price!'],
  },
  amenities: {
    type: [String], // Assuming amenities are represented as an array of strings
    default: [],
  },
  images: [
    {
      url: {
        type: String, // Store the image URL provided by Cloudinary
      },

    }
  ]
}, {
  timestamps: true,
});

module.exports = mongoose.model("Room", roomSchema);
