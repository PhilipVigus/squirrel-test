function it(label, test) {
  console.log(label);
  test();
}

function expect(conditionUnderTest) {
  toEqual: function toEqual(expectedResult) {
    conditionUnderTest === expectedResult ? console.log("Passed") : console.log("Test failed");
  }

  return { toEqual: toEqual };
}

it("confirms that 3 is equal to 2 + 1", () => {
  expect(3).toEqual(2 + 1);
});

it("confirms that 4 is equal to 2 + 1", () => {
  expect(4).toEqual(2 + 1);
});