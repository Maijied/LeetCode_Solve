/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let output = 0;
    for (let i = 0; i < 32; i++) {
        output = output * 2 + n % 2;
        n >>>= 1;
    }
    return output; //Runtime ->83 ms
//     function dec2bin(dec){
//     return (dec >>> 0).toString(2);
// }

// dec2bin(n); 
// console.log("dec2bin",dec2bin(n) )
};
//https://leetcode.com/problems/reverse-bits/description/