// ------------------------Description-----------------------------------------

// Your job is to group the words in anagrams.

// What is an anagram ?
// star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

// Example
// A typical test could be :

// // input
// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]

// ----------------------------------------------------------------------------


function groupAnagrams(words){
    const anagramsMap = new Map();
      
      words.forEach(word => {
          const sortedWord = word.split('').sort().join('');
          if (anagramsMap.has(sortedWord)) {
              anagramsMap.get(sortedWord).push(word);
          } else {
              anagramsMap.set(sortedWord, [word]);
          }
      });
      
      return Array.from(anagramsMap.values());
  }