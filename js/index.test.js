import { gameOfLife } from './index.js';

//Testing array.length

describe(`When argument are ${arrCanvas}`, () => {
    test(`Then the result should be ${0}`, () => {
        const r = gameOfLife();
        expect(r).toBe(gameOfLife);
    });
});
