/* DESCRIPTION:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */


/* --------------------------------------------------------------------------------- */

const reversNumber = (num) => {
    const numToArr = Array.from(String(num) , Number )
    return  numToArr.reverse()
}

console.log(reversNumber(0))






