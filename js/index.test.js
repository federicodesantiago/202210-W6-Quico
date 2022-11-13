import { arrayLength } from './index.js';

//Testing array.length

const dataLength2 = [
    [1, 2, 3, 4, 5],
    ['a', 'hola', 89],
    [undefined, undefined, null, null],
    [{}, 2, null, 4],
];

dataLength2.forEach((data) => {
    describe(`When argument are ${data}`, () => {
        test(`Then the result should be ${data.length}`, () => {
            const r = arrayLength(data);
            expect(r).toBe(data.length);
        });
    });
});
