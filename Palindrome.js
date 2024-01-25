/* Description : 
Write a function that checks if a given string (case insensitive) is a palindrome. */


/* ------------------------------------------- */

const palin = (str) => {
     return str.toLowerCase() == str.toLowerCase().split('').reverse().join('')
}

console.log(palin('sammas'))