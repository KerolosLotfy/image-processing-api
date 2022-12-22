import express from 'express';
import { checkInput, join } from '../Utilities/checkInput';
import { resizeImg } from '../Utilities/resizeImg';
const router = express.Router();
type data = {
    imgName: string;
    width: number;
    height: number;
    negate?:string 
};

router.get('/api', async (req, res) => {
    const imgData: data = {
        imgName: req.query.imageName as string,
        width: parseInt(req.query.width as string),
        height: parseInt(req.query.height as string),
        negate: req.query.negate  as string || undefined
    };

    if (req.query.imageName === undefined) {
        return res.render('index', { src: false, error: true });
    }
    
    // check image Name , width and height
    const checkStatus = checkInput(imgData as data);
    if (checkStatus === false) {
        return res.render('index', { src: false, error: true });
    } else if (checkStatus === 'notValid') {
        return res.render('index', { src: false, error: 'notValid' });
    } else {
        // resize image by sharp package
        await resizeImg(imgData as data).catch((err) => res.send(err));

        // to show image resized for user
        return res.render('index', {
            src: join(
                '.',
                'resizeImgs',
                `${imgData.width}_${imgData.height}_${imgData.imgName}`
            ),
            error: false,
        });
    }
});

export { router, resizeImg, data, checkInput };
