function messageToDOM(message) {
  document.getElementById("test-results").innerHTML += `<div>${message}</div>`;
}

export function it(label, test) {
  messageToDOM(label);
  test();
}

export function expect(conditionUnderTest) {
  function toEqual(expectedResult) {
    conditionUnderTest === expectedResult ? messageToDOM("- Passed") : messageToDOM("- Failed");
  }

  function toNotEqual(expectedResult) {
    conditionUnderTest !== expectedResult ? messageToDOM("- Passed") : messageToDOM("- Failed");
  }

  function toThrowError(expectedResult) {
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

  function toNotThrowError(expectedResult) {
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

export function stub(obj, methodName, returnValue) {
  if (returnValue === undefined) {
    obj[methodName] = function() {};
  } else {
    obj[methodName] = function() { return returnValue };
  }
}