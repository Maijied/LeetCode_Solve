/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return output = n.toString(2).split("0").join("").length; //Runtime ->74 ms
    //return output; //Runtime -> 73 ms

    // let count = 0;
    // let nToArr = {};

    // function numberToArray(number) {
  	// let array = number.toString().split("");
  	// return array.map(x => parseInt(x));
    // }

    // var myArray = numberToArray(n);
    // nToArr =  Array.from(n.toString()).map(Number);
    //  console.log("nToArr", nToArr);
    //  let len = nToArr.length;
    // for(let i = 0; i < len; i++){
    //     if(nToArr[i] == '1'){
    //          count++;
    //     }
    // }
    // console.log("c", count);
};
//https://leetcode.com/problems/number-of-1-bits/description/