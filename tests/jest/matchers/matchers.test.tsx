export {};

describe("Matchers examples", () => {
  test("Basic ones like toBE, toEqual, toMatch, toMatchObject, toContainEqual, not.toEqual, toHaveBeenCalled", () => {
    expect(1).toBe(1); // Checking for value and reference equality
    expect({ a: "b" }).toEqual({ a: "b" }); //Checking for deep value equality
    expect("abacaba").toMatch(/bac/); // Checking if a string matches a regexp
    expect({ a: "b", b: "c" }).toMatchObject({ a: "b" }); // Checking for a partial object match
    expect([1, 2, 3]).toContainEqual(2); // Checking if an array contains an element
    expect(2).not.toEqual(3); // using not to negate any matcher
    expect({ a: "b" }).toMatchObject({
      a: expect.any(String),
    }); // Type checking
  });

  test("First approach to mocks, toHaveBeenCalled and toHaveBeenCalledWith", async () => {
    // First approach to mocks
    const mockFunction = jest.fn(); // Creating a mock function
    await mockFunction();
    expect(mockFunction).toHaveBeenCalled(); // Checking if it was called
    const myParameter = "abracadabra";
    await mockFunction(myParameter);
    expect(mockFunction).toHaveBeenCalledTimes(2); // Checking for arguments
    expect(mockFunction).toHaveBeenCalledWith(myParameter); // Checking for arguments
    expect(mockFunction).not.toHaveBeenCalledWith({}); // Checking for arguments
    expect(mockFunction).not.toHaveBeenCalledTimes(3); // Checking for arguments
  });
});
