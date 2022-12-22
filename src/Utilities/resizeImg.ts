import { data } from '../routers/API';
import sharp from 'sharp';

// resize image by sharp package
async function resizeImg(data: data) {
    await sharp(`./website/fullImgs/${data.imgName}`)
        .resize({
            width: data.width as number,
            height: data.height as number,
        })
        .negate(data.negate === 'true' ? true : false)
        .toFile(
            `./website/resizeImgs/${data.width}_${data.height}_${data.imgName}`
        )
        .catch((error) => {
            console.log(error);
            return error;
        });
}

export { resizeImg };
