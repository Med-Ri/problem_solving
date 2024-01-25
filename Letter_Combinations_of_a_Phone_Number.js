// description :

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


// ==============================================================================================================


const letterCombinations = (digits) => {
    if (digits.length === 0 || digits == 0) {
        return [];
    }

    // Define the mapping of digits to letters
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    // Initialize the result array with an empty string
    let result = [''];

    // Iterate through each digit in the input
    for (let digit of digits) {
        // Get the letters corresponding to the current digit
        const letters = digitMap[digit];

        // Create a new array to store the updated combinations
        const newResult = [];

        // Iterate through the existing combinations and append each letter
        for (let combination of result) {
            for (let letter of letters) {
                newResult.push(combination + letter);
            }
        }

        // Update the result array with the new combinations
        result = newResult;
    }

    return result;
};


console.log('result', letterCombinations("0"))