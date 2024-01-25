/* description : 


Given a string s, return the longest 
palindromic substring in s.


Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb" */

/* ---------------------------------------------------------- */

var longestPalindrome = (s) => {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        // Check odd-length palindromes
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
        let palindrome = s.substring(left, right + 1);
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
        left--;
        right++;
        }
        // Check even-length palindromes
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
        let palindrome = s.substring(left, right + 1);
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
        left--;
        right++;
        }
    }
    return longest;
      
};

console.log(longestPalindrome('cbbd'))