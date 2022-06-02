/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    var count = 0;
    var highestNumber = 0;
    for (let i = 0; i < sentences.length; i++){
            for(let j = 0; j < sentences[i].length; j++){
                count = sentences[i].match(/(\w+)/g).length;
                if(highestNumber <= count) highestNumber = count;
            }
        }
    return highestNumber;
};
// Link: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/