import express from 'express';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'website', 'fullImgs'),
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

const uploadImages = express.Router();
uploadImages.post('/api', upload.single('imageName'), (req, res) => {
    res.redirect(
        `api?imageName=${req.file?.filename}&width=${req.body.width}&height=${req.body.height}&negate=${req.body.negate}`
    );
});

export { uploadImages };
