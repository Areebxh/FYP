const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },

    phone: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = owner
    },

    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },

    isBlock: {
        type: Boolean,
        //default: false,
      },
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)