
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./emailController')
const { google } = require('googleapis')
const { OAuth2 } = google.auth
const fetch = require('node-fetch')

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const { CLIENT_URL } = process.env


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body
//         const user = await Users.findOne({ email })
//         if (!user) return res.status(400).json({ msg: "This email does not exist." })

//         const isMatch = await bcrypt.compare(password, user.password)
//         if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." })

//         const refresh_token = createRefreshToken({ id: user._id })
//         res.cookie('refreshtoken', refresh_token, {
//             httpOnly: true,
//             path: '/user/refresh_token',
//             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//         })

//         res.json({ msg: "Login success!" })
//     } catch (err) {
//         return res.status(500).json({ msg: err.message })
//     }
// }


// const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const user = await Users.findOne({ email });

//       if (!user) {
//         return res.status(400).json({ msg: "This email does not exist." });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ msg: "Password is incorrect." });
//       }

//       // Generate JWT token
//       const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
//         expiresIn: '1h', // You can customize the expiration time
//       });

//       // Set the token as a cookie
//       res.cookie('accessToken', token, {
//         httpOnly: true,
//         maxAge: 1 * 60 * 60 * 1000, // 1 hour expiration time
//       });

//       res.json({ msg: "Login success!" });

//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   };

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "This email does not exist." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Password is incorrect." });
        }

        const access_token = createAccessToken({ id: user._id, email: user.email/* add other user info fields as needed */ });


        const refresh_token = createRefreshToken({ id: user._id });

        // Set access token cookie
        res.cookie('access_token', access_token, {
            httpOnly: true,
            maxAge:  7 * 24 * 60 * 60 * 1000, // 15 minutes
        });

        // Cookies.set('token', access_token, { expires: 7 });

        // Set refresh token cookie
        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            path: '/user/refresh_token',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        console.log("token ban rhi ha", access_token)

        res.json({ access_token, user });

    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

// const login = async (req, res) => {

//     try {
//         const { email, password } = req.body;
//         const user = await Users.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ msg: "This email does not exist." });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ msg: "Password is incorrect." });
//         }

//         const access_token = createAccessToken({ id: user._id, email: user.email/* add other user info fields as needed */ });

//         const refresh_token = createRefreshToken({ id: user._id });

//         res.cookie('refreshtoken', refresh_token, {
//             httpOnly: true,
//             path: '/user/refresh_token',
//             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
//         });

//         res.json({ access_token, user });


//     } catch (err) {
//         return res.status(500).json({ msg: err.message });
//     }
// };




const getAccessToken = (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken
        if (!rf_token) return res.status(400).json({ msg: "Please login now!" })

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ msg: "Please login now!" })

            const access_token = createAccessToken({ id: user.id })
            res.json({ access_token })
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        const user = await Users.findOne({ email })
        if (!user) return res.status(400).json({ msg: "This email does not exist." })


        const access_token = createAccessToken({ id: user._id })
        const url = `${CLIENT_URL}/user/reset/${access_token}`

        sendMail(email, url, "Reset your password")
        res.json({ msg: "Re-send the password, please check your email." })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
const resetPassword = async (req, res) => {
    try {
        const { password } = req.body
        console.log(password)
        const passwordHash = await bcrypt.hash(password, 12)

        await Users.findOneAndUpdate({ _id: req.user.id }, {
            password: passwordHash
        })

        res.json({ msg: "Password successfully changed!" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


const googleLogin = async (req, res) => {
    try {
        const { tokenId } = req.body

        const verify = await client.verifyIdToken({ idToken: tokenId, audience: process.env.MAILING_SERVICE_CLIENT_ID })

        const { email_verified, email, name, picture } = verify.payload

        const password = email + process.env.GOOGLE_SECRET

        const passwordHash = await bcrypt.hash(password, 12)

        if (!email_verified) return res.status(400).json({ msg: "Email verification failed." })

        const user = await Users.findOne({ email })

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Password is incorrect." })

            const refresh_token = createRefreshToken({ id: user._id })
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            })

            res.json({ msg: "Login success!" })
        } else {
            const newUser = new Users({
                name, email, password: passwordHash, avatar: picture
            })

            await newUser.save()

            const refresh_token = createRefreshToken({ id: newUser._id })
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            })

            res.json({ msg: "Login success!" })
        }


    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}



const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })

}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}


module.exports = {
    login,
    getAccessToken, forgotPassword, resetPassword, googleLogin
}