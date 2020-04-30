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

it("allows you to stub a method in an object", () => {
  const obj = {
    hello: function() { return "Hello"; }
  };

  stub(obj, "hello");
  expect(obj.hello()).toEqual(undefined);
});