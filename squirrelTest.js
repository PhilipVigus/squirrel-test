function it(label, test) {
  console.log(label);
  test();
}

function expect(conditionUnderTest) {
  toEqual: function toEqual(expectedResult) {
    conditionUnderTest === expectedResult ? console.log("Passed") : console.log("Failed");
  }

  toNotEqual: function toNotEqual(expectedResult) {
    conditionUnderTest !== expectedResult ? console.log("Passed") : console.log("Failed");
  }

  return { 
    toEqual: toEqual,
    toNotEqual: toNotEqual
  };
}

it("confirms that 3 is equal to 2 + 1", () => {
  expect(3).toEqual(2 + 1);
});

it("confirms that 4 is equal to 2 + 1", () => {
  expect(4).toEqual(2 + 1);
});

it("confirms that 4 is not equal to 2 + 1", () => {
  expect(4).toNotEqual(2 + 1);
});

it("confirms that 4 is not equal to 2 + 1", () => {
  expect(3).toNotEqual(2 + 1);
});