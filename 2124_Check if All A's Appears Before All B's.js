/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    // for(let i = 0; i < s.length; i++ ){
    //     if(i>0){
    //         console.log( s[i-1],s[i],s[i+1]);
    //         if(s[i-1] == 'a'){
    //             if(s[i] == 'b' || s[i] == 'a'){
    //                 return true;
    //             }
    //         }else if(s[i-1] == 'b'){
    //             if(s[i] == 'b' || s[i+1] == 'b' ){
    //                 return true;
    //             }else if(s[i+1] == 'a'){
    //                 return false;
    //             }
    //         }

    //         if(s[i] == 'a' && s[i-1] == 'b') return false;
            
    //     }
    //     return true;
    // }
    // return false;
    // let i = 0;
    // let strLength = s.lenght;
    // let strArr = s.split('');

    // while( i < strLength && strArr[i] == 'a'){
    //     ++i;
    // }
    // while(i < strLength){
    //     if(strArr[i] == 'a'){
    //         return false;
    //     }
    //     ++i;
    //     return true;
    // }

    // let ifB = false;
    
    // for (const char of s) {
    //     console.log(char);
    //     if (ifB && char === 'a') return false;
    //     if (char === 'b') ifB = true;
    // }
    
    // return true;

    for(let i=0;i<s.length-1;i++)
{
        if(s.charAt(i)>s.charAt(i+1))
        {
            return false;
        }
    }
    return true;

};