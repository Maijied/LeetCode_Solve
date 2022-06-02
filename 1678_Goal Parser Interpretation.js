/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    var output = '';
  for(let i = 0; i < command.length; i++){
      if(command[i] === 'G') output += 'G';
      else if(command[i] === '(' && command[i+1] === ')') output += 'o';
      else if(command[i] === '(' && command[i+1] === 'a' && command[i+2] === 'l' && command[i+3] === ')') output += 'al';
  }
  return output;
};
// Link: https://leetcode.com/problems/goal-parser-interpretation/