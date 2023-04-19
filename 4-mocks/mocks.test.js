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

  expect(mockCallback.mock.results([0].value)).toBe(42);

  expect(mockCallback.mock.results([1].value)).toBe(43);
});
