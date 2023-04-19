let animals = ["elephant", "zebra", "bear", "tiger"];

//This is used when you want to do something just once before you run all of your tests
beforeAll(() => {
  console.log("BEFORE ALL");
  animals = ["elephant", "zebra", "bear", "tiger"];
});

//This function runs required code to be executed before each test
beforeEach(() => {
  console.log("BEFORE EACH");
  animals = ["elephant", "zebra", "bear", "tiger"];
});

//This function is used to teardown something after each
afterEach(() => {
  console.log("AFTER EACH");
  animals = ["elephant", "zebra", "bear", "tiger"];
});

//Used when you want to do something after all the test have been completed
afterAll(() => {
  console.log("AFTER ALL");
  animals = ["elephant", "zebra", "bear", "tiger"];
});

describe("animal array", () => {
  it("should add animal to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals?.length).toBe(4);
  });
});


/**
 * NOTE: If you create another test group using describe which is not is not related with any of the beforeAll, afterAll, 
 * beforeEach and afterEach. they will also run for that test group.
 * 
 * To fix this problem. Add those functions inside the test group i.e describe function, 
 * which will now only run for the test blocks inside that test group.
 */
