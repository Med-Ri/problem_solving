// -------------------------------------------------Description-------------------------------

// You have a string. The string consists of words. Before words can be an exclamation mark !. Also some words are marked as one set with square brackets []. You task is to split the string into separate words and sets.
//  The set can't be contained in another set.

// Input:
//  String with words (separated by spaces), ! and [].

// Output:
//  Array with separated words and sets.

// Examples:

// ('Buy a !car [!red green !white] [cheap or !new]')  =>  ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']
// ('!Learning !javascript is [a joy]')                =>  ['!Learning', '!javascript', 'is', '[a joy]']
// ('[Cats and dogs] are !beautiful and [cute]')       =>  ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]']

// -------------------------------------------------------------------------------------------

function cleverSplit(s) {
  // Regular expression pattern to match words, exclamation marks, and sets
  const pattern = /\[.*?\]|\S+/g;

  // Find all matches using the pattern
  const matches = s.match(pattern);

  return matches;
}



console.log('result', cleverSplit('Buy a !car [!red green !white] [cheap or !new]')) // result =>  [ 'Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]' ]