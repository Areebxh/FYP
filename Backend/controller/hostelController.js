const express = require('express');
const router = express.Router();
const Hostel = require('../models/hostelModel');
const Room = require('../models/roomModel');

const hostelListing = async (req, res) => {
    try {
      const { name, description, address, rooms } = req.body;
  
      // Validate request body
      if (!name || !description || !address || !rooms || rooms.length === 0) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Create a new hostel with the owner ID
      const newHostel = await Hostel.create({
        name,
        description,
        address,
        owner: req.userId, // Set the owner to the extracted user ID from the token
      });
  
      // Create rooms for the hostel
      const createdRooms = await Room.create(
        rooms.map((room) => ({
          hostel: newHostel._id,
          roomNumber: room.roomNumber,
          capacity: room.capacity,
          availableSeats: room.availableSeats, // Use availableSeats from the request
          price: room.price,
          amenities: room.amenities || [],
        }))
      );
  
      // Update the hostel with the created room IDs
      newHostel.rooms = createdRooms.map((room) => room._id);
      await newHostel.save();
  
      res.status(201).json({ hostel: newHostel, rooms: createdRooms });
    } catch (error) {
      console.error('Error creating hostel:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  




module.exports = {hostelListing};