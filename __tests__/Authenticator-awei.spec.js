jest.setMock("body-parser", { json: jest.genMockFn() });
jest.dontMock("../lib/Authenticator");

var BodyParser = require('body-parser');
var Authenticator = require("../lib/Authenticator");

describe("authenticator", function() {

    it("should...", function() {

    });

});
