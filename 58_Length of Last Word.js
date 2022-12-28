/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.lenght == 0) return 0;
    let lastWord = s.replace(/[\s-]+$/,'').split(/[\s-]/).pop();
    console.log("Last", lastWord);
    return lastWord.length;
    // if(s.lenght == 1) return 1;
    // if(s.lenght == 0) return 0;
    // else{
    //     let last = /.*[\s-](\S+)/.exec(s)[1];
    //     return last.length;
    // }

};

// Link:: https://leetcode.com/problems/length-of-last-word/description/