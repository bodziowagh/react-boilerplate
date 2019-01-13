const Example = require("../src/components/example").default;

describe("Example test", () => {

    test("Should check Example returns its content", () => {
    	const content = "content";
    	const example = new Example(content);

		expect(example.getContent()).toEqual(content);
	});
});
