# Squirrel Test

This is my attempt at implementing a simple testing framework following a similar API to Jasmine.

Use case 1:
it("confirms that 3 is equal to 2 + 1", () => {
  expect(3).toEqual(2 + 1);
});