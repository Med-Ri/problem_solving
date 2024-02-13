// ----------------------------------------------------------------------------------

// You're playing to scrabble. But counting points is hard.

// You decide to create a little script to calculate the best possible value.

// The function takes two arguments :

// `points` : an array of integer representing for each letters from A to Z the points that it pays
// `words` : an array of strings, uppercase

// You must return the index of the shortest word which realize the highest score.
// If the length and the score are the same for two elements, return the index of the first one.

// ----------------------------------------------------------------------------------

const getBestWord = (points, words) => {
  let maxScore = -Infinity;
  let shortestWordIndex = 0;

  const score = (word) =>
    word
      .split("")
      .reduce((acc, letter) => acc + points[letter.charCodeAt(0) - 65], 0);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordScore = score(word);
    if (
      wordScore > maxScore ||
      (wordScore === maxScore && word.length < words[shortestWordIndex].length)
    ) {
      maxScore = wordScore;
      shortestWordIndex = i;
    }
  }

  return shortestWordIndex;
}


// Example usage:
const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]; // An array representing points for letters A to Z
const words = ["HELLO", "WORLD", "SCRABBLE"]; // An array of words
console.log(getBestWord(points, words)); // Output: Index of the shortest word with the highest score