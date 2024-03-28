// -------------------------- Description ------------------------------------------

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

// Constraints:
// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

// ---------------------------------------------------------------------------------

var isMatch = function (s, p) {
  const memo = new Map();

  const dp = (i, j) => {
    if (memo.has(`${i}-${j}`)) return memo.get(`${i}-${j}`);
    if (j === p.length) return i === s.length;

    const firstMatch = i < s.length && (p[j] === "." || p[j] === s[i]);

    let ans;
    if (j + 1 < p.length && p[j + 1] === "*") {
      ans = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
    } else {
      ans = firstMatch && dp(i + 1, j + 1);
    }

    memo.set(`${i}-${j}`, ans);
    return ans;
  };

  return dp(0, 0);
};
