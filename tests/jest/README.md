# Getting Started

### Install Jest using yarn:
`yarn add --dev jest`
### Or npm:
`npm install --save-dev jest`
###### Note: Jest documentation uses yarn commands, but npm will also work. You can compare yarn and npm commands in the [yarn docs, here](https://jestjs.io/docs/getting-started).

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

```
function sum(a, b) {
return a + b;
}
module.exports = sum;
```

Then, create a file named sum.test.js. This will contain our actual test:
const sum = require('./sum');
```
test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your package.json:
```
{
    "scripts": {
    "test": "jest"
    }
}
```

Finally, run yarn test or npm run test and Jest will print this message:
```
PASS ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)

You just successfully wrote your first test using Jest!
```

###### This test used expect and toBe to test that two values were exactly identical. To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

## What is a matcher?
A matcher (or an assertion) is a function that is used to check for a specific condition. Most often, it compares two values. Here are some of the basic matches available in Jest:

```
expect(1).toBe(1); // Checking for value and reference equality
expect({a: 'b'}).toEqual({a: 'b'}); //Checking for deep value equality
expect('abacaba').toMatch(/bac/); // Checking if a string matches a regexp
expect({a: 'b', b: 'c'}).toMatchObject({a: 'b'}); // Checking for a partial object match
expect([1, 2, 3]).toContainEqual(2); // Checking if an array contains an element
expect(2).not.toEqual(3); // using not to negate any matcher
expect({a: 'b'}).toMatchObject({
  a: expect.any(String)
}); // Type checking

const mockFunction = jest.fn(); // Creating a mock function
expect(mockFunction).toHaveBeenCalled(); // Checking if it was called
expect(mockFunction).toHaveBeenCalledWith('abacaba'); // Checking for arguments
```

Visit matchers folder for (running examples)[/matchers/matchers.test.tsx].
Visit practice_jest/ for (active excersices)[/practice_jest/practice.test.tsx].

