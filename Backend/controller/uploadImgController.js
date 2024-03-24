const cloudinary = require('cloudinary')
const fs = require('fs')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})



const uploadAvatar = {
    uploadAvatar: (req, res) => {
        try {
            console.log("////////////////////////////////////////")
            const file = req.files.file;

            cloudinary.v2.uploader.upload(
                file.tempFilePath,
                { folder: 'avatar', width: 150, height: 150, crop: 'fill' },
                async (err, result) => {
                    if (err) {
                        // Handle the error within the callback
                        console.error(err);
                        removeTmp(file.tempFilePath);
                        return res.status(500).json({ msg: 'Error uploading the file.' });
                    }

                    // If no error, continue with the success logic
                    removeTmp(file.tempFilePath);
                    console.log("result is : ", { result });
                    res.json({ url: result.secure_url });
                }
            );
        } catch (err) {
            // Handle synchronous errors (outside of the callback)
            console.error(err);
            return res.status(500).json({ msg: 'Internal Server Error' });
        }
    },
};

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) console.error(err);
    });
};

module.exports = uploadAvatar;
