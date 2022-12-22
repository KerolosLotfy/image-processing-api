import { data } from '../routers/API';
import { existsSync } from 'fs';
import { join } from 'path';

// check image Name , width and height
function checkInput(data: data): string | boolean {
    const path = join(
        __dirname,
        '..',
        '..',
        'website',
        'fullImgs',
        data.imgName
    );
    const imgFile = existsSync(path);
    if (imgFile === false || data.imgName === '') {
        return false;
    } else if (isNaN(data.width) || isNaN(data.height)) {
        return 'notValid';
    } else {
        return true;
    }
}

// check if the processed image already exists
function exists(data: data): boolean {
    const path = join(
        __dirname,
        '..',
        '..',
        'website',
        'resizeImgs',
        `${data.width}_${data.height}_${data.imgName}`
    );
    const imgFile = existsSync(path);
    if (imgFile === true) {
        return true;
    } else {
        return false;
    }
}

export { checkInput, join, exists };
