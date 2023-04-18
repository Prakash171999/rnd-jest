const sum = require("./sum");

//You can specify a test block by saying test or it which will be the function.
//This function has two parameters.The first parameter is the name of the test describing what the test is doing. And second parameter is the callback
it("adds 1 + 2 to equals 3", () => {
  const result = sum(1, 2);

  //This is where assertion comes in to check if the expected result is gained or not.
  // toBe() is one of the matcher method.
  expect(result).toBe(3);
});

//Group common test blocks using describe. It is a way to group test together.
describe("", () => {
  it("adds 1 + 2 to equals 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});
