const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./emailController')

const { google } = require('googleapis')
const { OAuth2 } = google.auth
const fetch = require('node-fetch')

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const { CLIENT_URL } = process.env




const register = async (req, res) => {
    try {
        const { name, email, password,phone ,role} = req.body

        if (!name || !email || !password  ||!phone )
            return res.status(400).json({ msg: "Please fill in all fields." })

        if (!validateEmail(email))
            return res.status(400).json({ msg: "Invalid emails." })

        const user = await Users.findOne({ email })
        if (user) return res.status(400).json({ msg: "This email already exists." })

        if (password.length < 6)
            return res.status(400).json({ msg: "Password must be at least 6 characters." })

        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = {
            name, email, password: passwordHash,phone,role
        }

        const activation_token = createActivationToken(newUser)

        const url = `${CLIENT_URL}/user/activate/${activation_token}`
        sendMail(email, url, "Verify your email address")


        res.json({ msg: "Register Success! Please activate your email to start." })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

const activateEmail = async (req, res) => {
    try {
        const { activation_token } = req.body
        const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

        const { name, email, password,phone,role } = user

        const check = await Users.findOne({ email })
        if (check) return res.status(400).json({ msg: "This email already exists." })

        const newUser = new Users({
            name, email, password,phone,role
        })

        await newUser.save()

        res.json({ msg: "Account has been activated!" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


// const register = async (req, res) => {
//     try {
//       const { name, email, password, address, phone } = req.body;
  
//       if (!name || !email || !password || !address || !phone)
//         return res.status(400).json({ msg: "Please fill in all fields." });
  
//       if (!validateEmail(email))
//         return res.status(400).json({ msg: "Invalid emails." });
  
//       const user = await Users.findOne({ email });
//       if (user) return res.status(400).json({ msg: "This email already exists." });
  
//       if (password.length < 6)
//         return res.status(400).json({ msg: "Password must be at least 6 characters." });
  
//       const passwordHash = await bcrypt.hash(password, 12);
  
//       // Directly sign the activation token
//       const activation_token = jwt.sign(
//         {
//           name,
//           email,
//           password: passwordHash,
//           address,
//           phone,
//           // Add any other user data you want in the token
//         },
//         process.env.ACTIVATION_TOKEN_SECRET,
//         { expiresIn: '15m' } // Set the expiration time
//       );
  
//       const url = `${CLIENT_URL}/user/activate/${activation_token}`;
//       sendMail(email, url, "Verify your email address");
  
//       res.json({ msg: "Register Success! Please activate your email to start." });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   };


//   const activateEmail = async (req, res) => {
//     try {
//       const { activation_token } = req.body;
  
//       const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
  
//       const { name, email, password, address, phone, role } = user;
  
//       const check = await Users.findOne({ email });
//       if (check) return res.status(400).json({ msg: "This email already exists." });
  
//       const newUser = new Users({
//         name,
//         email,
//         password,
//         address,
//         phone,
//         role,
//       });
  
//       await newUser.save();
  
//       res.json({ msg: "Account has been activated!" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   };

  


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' })
}



module.exports = { register, activateEmail };