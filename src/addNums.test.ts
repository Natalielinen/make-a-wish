import { addNums } from 'addNums';

describe('addNums', () => {
    test('add 1 and 2', () => {
        expect(addNums(1, 2)).toBe(3);
    });
});
