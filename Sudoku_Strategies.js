// --------------------------------------------------------------------------------------------------------

// Introduction
// The strategy used in this kata is part of a set of strategies aimed at people (not computers) to make progress in a Sudoku puzzle. The purpose is not to solve the entire puzzle. For this reason, a puzzle in this kata doesn't necessarily have a unique solution, if any. More info and examples of this and other strategies can be found at sudokuwiki. If you are new to Sudoku, you may find the glossary of Sudoku useful.

// Strategy
// The "Naked Single" stategy allows us to find a cell with only one remaining candidate. This strategy is aimed at "Beginner" level.

// Task
// Given a sudoku puzzle, return the location and value of the element you found using the strategy.

// Input
// the puzzle is always 9x9 (9 rows, 9 cols)
// the input is a 2d array of numbers representing the puzzle
// 0: a cell of which the element value is not given
// 1-9: a cell of which the element is given (clue)
// there is at least one solution available
// Output
// the output is an array containing the row, col and value of the element you found
// row index starts at 0 and goes from top to bottom
// col index starts at 0 and goes from left to right
// element value is in range of 1-9
// if there is more than one solution, you may return any of them
// Examples
// The example tests show the puzzle in a stringified format for better visualisation.


// # puzzle:                     # stringified puzzle in examples

// [ [0,0,0,0,0,0,0,0,1],        . . . | . . . | . . 1
//   [0,2,0,7,0,0,6,3,0],        . 2 . | 7 . . | 6 3 .
//   [0,0,0,0,0,0,0,0,5],        . . . | . . . | . . 5
//   [0,0,0,0,0,0,0,0,0],        ------+-------+------
//   [0,0,0,0,0,0,0,0,0],        . . . | . . . | . . .
//   [0,0,0,0,0,0,0,0,8],        . . . | . . . | . . .
//   [0,0,0,0,0,0,0,0,9],        . . . | . . . | . . 8
//   [0,0,0,0,0,0,0,0,0],        ------+-------+------
//   [0,0,0,0,0,0,0,0,0] ]       . . . | . . . | . . 9
//                               . . . | . . . | . . .
//                               . . . | . . . | . . .
// Last remaining cell in row, col or box
// The last remaining cell in any row, col or box has to take the last remaining element.


// # puzzle:               # found:

// 1 8 9 | . . . | . . .   # row: 1, col: 0, value: 3
// . 2 7 | . . . | . . .
// 6 5 4 | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . . . | . . . | . . .
// Elimination of candidates used in other peer cells
// A cell has to take the last remaining candidate if all other candidates are already taken by peer cells. A peer cell is a cell that shares either a row, col, box or combination with the source cell.


// # puzzle:               # found:

// . 1 7 | . . . | . . .   # row: 1, col: 1, value: 2
// . . . | . . 5 | . 6 .
// 8 3 . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . 4 . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . 9 . | . . . | . . .
// Good luck, have fun!


// --------------------------------------------------------------------------------------------------------



function progress(puzzle) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzzle[row][col] === 0) { // Check only empty cells
                let candidates = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                for (let i = 0; i < 9; i++) {
                    candidates.delete(puzzle[row][i]); // Check row
                    candidates.delete(puzzle[i][col]); // Check column
                }

                // Check box
                let boxStartRow = Math.floor(row / 3) * 3;
                let boxStartCol = Math.floor(col / 3) * 3;
                for (let i = boxStartRow; i < boxStartRow + 3; i++) {
                    for (let j = boxStartCol; j < boxStartCol + 3; j++) {
                        candidates.delete(puzzle[i][j]);
                    }
                }

                if (candidates.size === 1) { // Only one candidate found
                    let value = Array.from(candidates)[0];
                    return [row, col, value]; // Return row, col, and value
                }
            }
        }
    }
    return null; // No naked singles found
}


// Example puzzle
let puzzle = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 2, 0, 7, 0, 0, 6, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let result = progress(puzzle);
if (result) {
    console.log("Found naked single at row:", result[0], "col:", result[1], "value:", result[2]);
} else {
    console.log("No naked single found.");
}