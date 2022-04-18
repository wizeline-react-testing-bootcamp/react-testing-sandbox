//import your function:
import { allCollection } from "../../helpers/index";

//describe divides our tests in sections
describe("allCollection unit test for function", () => {
  // tes function is only one suit that needs to expect literally an output
  test("allCollection should map  the array and return only second argument values", async () => {
    const names = ["Ale", "Pablo"];
    const array = [
      {
        data: {
          name: names[0],
        },
      },
      {
        data: {
          name: names[1],
        },
      },
    ];
    await expect(allCollection(array)).toEqual(names.sort());
  });

  test("allCollection should not break on missing array", async () => {
    await expect(allCollection(null)).toEqual(new Array());
  });
});
