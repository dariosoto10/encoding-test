function cleanString(key, value) {
  let stringCleaned = "";

  if (value > 9) {
    stringCleaned += `9${key}`
    stringCleaned += cleanString(key, value - 9);
  } else {
    stringCleaned = `${value}${key}`
  }

  return stringCleaned;
}

function cleanEncoding(object) {
  let encodingString = "";

  for (var [key, value] of Object.entries(object)) {
    encodingString += `${cleanString(key, value)}`;
  }

  return encodingString;
}

function encodingLength(string) {
  const words = {};
  string.split("").map((key) => {
    if (words[key]) {
      words[key] = words[key] + 1;
    } else {
      words[key] = 1;
    }
  });

  return cleanEncoding(words);
}

console.log(encodingLength("AAAAAAAAAAAAABBCCCCDD"));
console.log(encodingLength("aA"));
console.log(encodingLength("122333"));
