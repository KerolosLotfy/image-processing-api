import { checkInput } from '../routers/API';

describe('=> checking input', () => {
    describe('(1) check image name exsits in images folder or not', () => {
        it(' -- image encenadaport.jpg is exists ', () => {
            expect(
                checkInput({
                    imgName: 'encenadaport.jpg',
                    width: 200,
                    height: 200,
                })
            ).toBeTruthy();
        });

        it('-- image encenadaport is not exists ', () => {
            expect(
                checkInput({ imgName: 'encenadaport', width: 200, height: 200 })
            ).toBeFalsy();
        });
    });

    describe('(2) check image width and height valid or not', () => {
        it('-- width or height not a number ', () => {
            expect(
                checkInput({
                    imgName: 'encenadaport.jpg',
                    width: NaN,
                    height: 200,
                })
            ).toBe('notValid');
        });
    });
});
