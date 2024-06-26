// ------------------------------------Description---------------------------------------------------

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// --------------------------------------------------------------------------------------------------

const lengthOfLastWord = (s) => {
  // Step 1: Trim trailing spaces
  s = s.trim();
  // Step 2: Split the string by spaces
  const words = s.split(" ");
  // Step 3: Filter out any empty strings
  const filteredWords = words.filter((word) => word.length > 0);
  // Step 4: Find the last word in the array and return its length
  const lastWord = filteredWords[filteredWords.length - 1];
  return lastWord.length;
}




// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6