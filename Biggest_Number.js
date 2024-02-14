// ---------------------------Description---------------------------------------

// The task is to create a function called biggestNumber that takes an array of numbers as input and returns the largest number in the array. 

// ------------------------------------------------------------------


//Solution 1 using (ES6)
const biggestNumber = (arr) => {
    return Math.max(...arr)
}

console.log('result', biggestNumber([19,1,0,20,2,105,-255,30,106])) //result ==> 106