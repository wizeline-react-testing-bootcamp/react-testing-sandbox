export const severalReturnTypesFunction = (myParam: number) => {
  switch (myParam) {
    case 0:
      const fullObject = {
        a: 124323,
        b: {
          phone: "123-123-1234",
          address: "Los Angeles, CA.",
          c: {
            d: {
              value: myParam,
            },
          },
        },
      };
      return fullObject;
    case 1:
    case 2:
      return null;
    case 3:
      throw `${myParam} option is no considered for this`;
    case 4:
      return Math.round(parseFloat(myParam.toString()) + 3.1416).toFixed(2);
    default:
      throw new TypeError(`${myParam} has no option`);
  }
};
