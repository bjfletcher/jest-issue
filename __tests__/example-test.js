jest.dontMock('../example');
jest.dontMock('../library');

var e = require('../example');

describe('e', function() {
    it('calls some function', function() {
        e.f();
        expect(1).toBe(1);
    });
});
