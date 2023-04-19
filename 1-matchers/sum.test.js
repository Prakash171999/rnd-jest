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

/**
 * null, empty string i.e "", undefined and 0 evaluates falsy
 * Can have multiple expects in a describe function nut not recommended.
 * If any one of the expect fails then whole test fails.
 */
describe("truth or false", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy(); //Will pass
    // expect(n).toBeTruthy() //Will fail
    expect(n).not.toBeTruthy(); //Will pass
    expect(n).toBeNull(); //Will pass
    expect(n).not.toBeUndefined(); //Will pass
  });
});

/**
 * Number matcher methods
 */
describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(4);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.299);
  });
});

//String matchers
describe("string", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

//Array matchers
describe("arrays", () => {
  const shopList = ["soap", "shampoo", "trash bag", "milk"];

  expect(shopList).toContain("milk");
});

function compileIOSCode() {
  throw new Error("You are using the wrong package");
}

//exception
describe("exception", () => {
  it("compiling IOS goes as expected", () => {
    //Will throw error as the error message is not identical
    // expect(() => compileIOSCode()).toThrow(
    //   "Something wrong with the source code"
    // );

    expect(() => compileIOSCode()).toThrow("You are using the wrong package");
  });
});
