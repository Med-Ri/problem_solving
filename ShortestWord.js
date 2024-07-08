// ------------------------------------------Description----------------------------------------

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// ---------------------------------------------------------------------------------------------




function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}



console.log('result', findShort("Simple examples to test the shortest word length")) // result : 2 ==> (shortest word is "to" and "the", both of length 2)