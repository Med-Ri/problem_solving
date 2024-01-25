/* Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6 */


/* -------------------------------------------------------------------------------------------------------------- */

const sumNumb = (arr) => {

    arr.sort((a,b)=>a-b)
    arr.pop()
    arr.shift()
    
    var sum = 0

    for (let i = 0 ; i<arr.length ; i++){
        sum = sum + arr[i]
    }
 
    return sum

}

console.log(sumNumb([ 0, 1, 6, 10, 10 ]))