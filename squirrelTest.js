function it(label, test) {
  messageToDOM(label);
  test();
}

function expect(conditionUnderTest) {
  toEqual: function toEqual(expectedResult) {
    conditionUnderTest === expectedResult ? messageToDOM("- Passed") : messageToDOM("- Failed");
  }

  toNotEqual: function toNotEqual(expectedResult) {
    conditionUnderTest !== expectedResult ? messageToDOM("- Passed") : messageToDOM("- Failed");
  }

  return { 
    toEqual: toEqual,
    toNotEqual: toNotEqual
  };
}

function messageToDOM(message) {
  document.getElementById("test-results").innerHTML += `<div>${message}</div>`;
}