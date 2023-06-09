const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results?.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

/***
 * To create mock function => jest.fn()
 * Mocking callback
 */
it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  //Value 2 is expected because mockCallback is called twice as it will loop twice given the array is [0,1] with a length of two.
  expect(mockCallback.mock.calls.length).toBe(2);

  /**mockCallback.mock.calls[0][0]: This retrieves the first argument passed to the first call of the mock function.
   * Output will be: 0. As it will retrieve the first index data of the first index inner array([0,1]).
   * **/
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  expect(mockCallback.mock.calls[1][0]).toBe(1);

  expect(mockCallback.mock.results[0].value).toBe(42);

  expect(mockCallback.mock.results[1].value).toBe(43);
});

it("mock return value", () => {
  const mock = jest.fn();

  //mockReturnValueOnce() is called on the mock function to specify that the next time the function is called, it should return true.
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello");

  const results1 = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results1).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("Hello");
});

/**
 * We don't want to make api call but only mock axios
 */
it("mock axios", async () => {
  //First parameter always have to be an object. Second parameter accepts what METHOD i.e(GET, POST, etc) are we going to spy on.
  /**
   * 
   */
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "This is a data todo",
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe("This is a data todo");
});
