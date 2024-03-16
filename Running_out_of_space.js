// --------------------------------Description-----------------------------------------
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
// ------------------------------------------------------------------------------------



function spacey(array){
    let result = [];
      let accumulatedWord = '';
      for (let word of array) {
          accumulatedWord += word.replace(/\s/g, '');
          result.push(accumulatedWord);
      }
      return result;
  }