function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  //return a ? true : false;
  if (a) {
    return true;
  } else {
    return false;
  }
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return a % 2 !== 0 ? true : false;
}

function isEven(a) {
  return a % 2 === 0 ? true : false;
}

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a)) ? true : false;
}

function startsWith(char, string) {
  return string[0] === char ? true : false;
}

function containsVowels(string) {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    if (vowelArray.includes(string[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
      if (string[i] === string[i].toUpperCase()) return false;
    }
  }
  return true;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
