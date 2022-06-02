/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    var output = '';
    for(let i = 0; i < address.length; i++){
        if(address[i] === ".") output += '[.]';
        else output += address[i];
    }
    return output;
};
// Link: https://leetcode.com/problems/defanging-an-ip-address/