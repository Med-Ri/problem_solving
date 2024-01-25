/* Description : 
Given a string s, find the length of the longest 
substring , without repeating characters. */

/* Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */


/* ---------------------------------------------------------------------------------------------------- */

var lengthOfLongestSubstring = (s) => {
    let maxLen = 0 ;
    let i = 0 ;
    let j = 0 ;

    const set = new Set()

    while (j<s.length){
        if(!set.has(s[j])){
            set.add(s[j])
            j++
            maxLen = Math.max(maxLen,set.size)
        }else{
           set.delete(s[i])
           i++
        }
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("abbc"))