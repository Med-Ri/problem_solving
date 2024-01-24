/* Task : 


Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
 */

/* -------------------------------------------------------------------------------------------------- */

const shearchNeedle = (arr) => {

    const indexOfNed = arr.indexOf('needle')
    return `found the needle at position ${indexOfNed}`

}

console.log(shearchNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))