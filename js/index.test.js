import { gameOfLife } from './prueba.js';

//Testing array.length
let arrCanvas = [];
describe(`When argument are ${arrCanvas}`, () => {
    test(`Then the result should be ${0}`, () => {
        const r = gameOfLife();
        expect(r).toBe(gameOfLife);
    });
});
