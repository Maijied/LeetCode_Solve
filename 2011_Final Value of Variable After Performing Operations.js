/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "--X"){ 
            --x;
        }else if(operations[i] === "X--"){
            x--;  
        }else if(operations[i] === "++X"){
            ++x;  
        }else if(operations[i] === "X++"){
            x++;  
        }
        
    }
    return x;
};
// Link: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/