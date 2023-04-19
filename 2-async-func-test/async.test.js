const fetchData = require("./async");

it("should return correct todo", async () => {
  // expect(todo?.id).toBe(1)  Doesn't work as it is asynchronous

  //   ****************************************************

  //   const todo = fetchData(1).then((todo) => {
  //     expect(todo?.id).toBe(1);
  //   });

  //   or

  const todo = await fetchData(1);
  expect(todo?.id).toBe(1);
});
