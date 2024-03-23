const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ msg: "Invalid Authentication: No token provided." });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.error("Token verification failed:", err);
                return res.status(401).json({ msg: "Invalid Authentication: Token verification failed." });
            }

            console.log("Decoded token:", decoded);
            req.userId = decoded.id; // Attach the user ID to the request
            console.log("User ID:", req.userId);
            next();
        });
    } catch (err) {
        console.error("Error in auth middleware:", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = auth;
