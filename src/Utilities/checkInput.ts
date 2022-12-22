import { data } from '../routers/API';
import { existsSync } from 'fs';
import { join } from 'path';

// check image Name , width and height
function checkInput(data: data) {
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

export { checkInput, join };
