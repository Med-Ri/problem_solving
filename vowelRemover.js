/* DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata */

/* ------------------------------------------------------------- */

const remVoy = (str) => {
    const newStr = str.toLowerCase().split('')
    const filStr =  newStr.filter(el=> el!== 'a' && el !== 'e' && el !== 'i' && el !== 'o' && el !== 'u')
    return filStr.join('')
}

console.log(remVoy('HelLO'))