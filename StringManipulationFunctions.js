//exercise 1 :
//Reverse a String: Write a function that reverses a given string.

//js :
function oldReverseString(str) {
    // Initialize an empty string to store the reversed string
    var reversedStr = "";
    // Loop through the string from the end to the beginning
    for (var i = str.length - 1; i >= 0; i--) {
        // Append each character to the reversed string
        reversedStr += str[i];
    }
    return reversedStr; // Return the reversed string
}

console.log(oldReverseString("hello")); // Output: "olleh"

//es6:
const reverseStringES6 = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseStringES6("hello")); // Output: "olleh"



// ================================================================================================================

//exercise 2 :
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

const capitalizeWordsES6 = (sentence) => {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// Example usage
console.log(capitalizeWordsES6("hello world! this is a test."));  // Output: "Hello World! This Is A Test."