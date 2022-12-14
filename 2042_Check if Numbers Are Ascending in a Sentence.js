/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    // let str = s;
    // let arr = [];
    // for(let i = 0; i < str.length; i++){
    //     if(str[i] >= 0 || str[i] <= 9 ){
    //         if(str[i+1] >= 0 || str[i+1] <= 9 ){
    //             arr.push(str[i]);
    //         }
    //     }
    // }
    const result = (s.match(/\d+/g) || []).map(n => parseInt(n));
    console.log(result);
    for(let i = 0; i < result.length; i++ ){
        if(i>0){
            console.log(result[i-1],result[i]  )
            if(result[i-1] >= result[i] || result[i+1] <= result[i]){
                return false;
            }
        }
    }
    return true;
    
};