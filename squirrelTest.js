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

  toThrowError: function toThrowError(expectedResult) {
    try {
      conditionUnderTest();
    } catch(e) {
      if (e === expectedResult) {
        messageToDOM("- Passed");
        return;
      }
    }

    messageToDOM("- Failed");
  }

  toNotThrowError: function toNotThrowError(expectedResult) {
    try {
      conditionUnderTest();
    } catch(e) {
      if (e === expectedResult) {
        messageToDOM("- Failed");
        return;
      }
    }

    messageToDOM("- Passed");
  }

  return { 
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toThrowError: toThrowError,
    toNotThrowError: toNotThrowError
  };
}

function stub(obj, methodName, returnValue) {
  if (returnValue === undefined) {
    obj[methodName] = function() {};
  } else {
    obj[methodName] = function() { return returnValue };
  }
}

function messageToDOM(message) {
  document.getElementById("test-results").innerHTML += `<div>${message}</div>`;
}