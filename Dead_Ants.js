// ------------------Description------------------------------------------

// An orderly trail of ants is marching across the park picnic area.

// It looks something like this:

// ..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
// But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! Oh No, it's an ant stampede!!

// Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.

// The resulting carnage looks like this:

// ...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
// Can you find how many ants have died?

// ------------------------------------------------------------------------------------------


deadAntCount = function(ants) {
    // Check if the input is not a string or is null/undefined
     if (typeof ants !== 'string' || ants === null || ants === undefined) {
       return 0;
     }
   
     // Replace 'ant' with an empty string to get the scene after the stampede
     const afterStampede = ants.replace(/ant/g, '');
     console.log('afterStampede', afterStampede)
     
     // Count the occurrences of 'a', 'n', 't' in the scene after the stampede
     const deadAnts = {
       'a': afterStampede.split('a').length - 1,
       'n': afterStampede.split('n').length - 1,
       't': afterStampede.split('t').length - 1
     };
     console.log ('deadAnts', deadAnts)
     
     // Return the maximum count of 'a', 'n', 't' as the number of dead ants
     return Math.max(deadAnts['a'], deadAnts['n'], deadAnts['t']);
   }
   
   
   const ants = "...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t";
   const result = deadAntCount(ants);
   console.log("Number of dead ants: " + result);