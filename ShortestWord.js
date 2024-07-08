// ------------------------------------------Description----------------------------------------

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// ---------------------------------------------------------------------------------------------




function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}



console.log('result', findShort("Simple examples to test the shortest word length")) // result : 2 ==> (shortest word is "to" and "the", both of length 2)



/* 

Solution Explanation

    1-Split the String into Words:
        Use the split(" ") method on the string s to break it into an array of words. The space character " " is used as the delimiter to separate the words.
        s.split(" ")
        For example, if s = "Simple examples to test", this will produce the array ["Simple", "examples", "to", "test"].

    2-Map Words to Their Lengths:
        Use the map function to transform each word in the array into its length. The map method applies the given function to each element in the array and returns a new array with the results.
        s.split(" ").map(word => word.length)
        For the array ["Simple", "examples", "to", "test"], this will produce the array [6, 8, 2, 4].

    3-Find the Minimum Length:
        Use the Math.min function to find the smallest number in the array of word lengths. The Math.min function takes a list of numbers as arguments and returns the smallest one.
        Math.min(...s.split(" ").map(word => word.length))
        The spread operator ... is used to expand the array into individual arguments. For the array [6, 8, 2, 4], this will return 2, which is the length of the shortest word "to". 

*/