import sharp from 'sharp';

describe('sharp image processing module', () => {
    it('resize for santamonica.jpg & width = 300 & height = 300', async () => {
        await sharp(`./website/fullImgs/santamonica.jpg`)
            .resize({
                width: 300 as number,
                height: 300 as number,
            })
            .negate(false)
            .toFile(`./website/resizeImgs/300_300_santamonica.jpg`)
            .then((data: sharp.OutputInfo) => {
                expect(data.format as string).toEqual('jpeg');
            });
    });
});
