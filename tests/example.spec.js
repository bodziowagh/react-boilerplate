const Example = require("../src").Example;

describe("Example test", () => {

    test("Should check Example returns its content", () => {
    	const content = "content";
    	const example = new Example(content);

		expect(example.getContent()).toEqual(content);
	});
});
