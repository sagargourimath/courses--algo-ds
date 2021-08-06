const getMaxChar = (string) => {
  const charMap = {};

  for (let char of string) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }

    // Alternate way for this:
    // chars[char] = chars[char] + 1 || 1
  }

  let maxCount = 0;
  let maxChar = '';

  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(getMaxChar('Hello There!'));
