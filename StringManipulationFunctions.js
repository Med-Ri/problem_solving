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

// Example usage
console.log(oldReverseString("hello")); // Output: "olleh"

//es6:
const reverseStringES6 = (str) => {
    return str.split("").reverse().join("");
};

// Example usage
console.log(reverseStringES6("hello")); // Output: "olleh"



// ================================================================================================================