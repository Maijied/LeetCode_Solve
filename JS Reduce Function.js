// Play with Reduce(): 

// Summation
console.log([3, 5, 4, 3, 6, 2, 3, 4].reduce((a, i) => a + i)); //30

// Without initial value
console.log([3, 5, 4, 3, 6, 2, 3, 4].reduce((a, i) => a + i, 5 )); //30+5 => 35

// For clarity the above code is the same as 
console.log([3, 5, 4, 3, 6, 2, 3, 4].reduce(function(a, i){return (a + i)}, 0 )); //30

// Multiplication
console.log([3, 5, 4, 3, 6, 2, 3, 4].reduce((a, i) => a * i)); //25920

// Find the maximum in an array: 
console.log([3, 5, 4, 3, 6, 2, 3, 4].reduce((a, i) => Math.max(a, i), -Infinity));  //6
console.log(Math.max(...[3, 5, 4, 3, 6, 2, 3, 4]));  //6

// Concatenating uneven arrays 
let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"], 
    ["this","is","a","long","sentence"]
  ]
  let dataConcat = data.map(item=>item.reduce((a,i)=>`${a} ${i}`));
  console.log(dataConcat); 
//    [
//     'The red horse',
//     'Plane over the ocean',
//     'Chocolate ice cream is awesome',
//     'this is a long sentence'
//   ]

// Removing duplicates in an array: 
let dupes = [1,2,3,'a','a','f',3,4,2,'d','d']
let withOutDupes = dupes.reduce((noDupes, curVal) => {
    // console.log("noDupes",noDupes,"curVal",curVal, "indexOf(curVal)",noDupes.indexOf(curVal))
  if (noDupes.indexOf(curVal) === -1) { noDupes.push(curVal) }
  return noDupes
}, [])
const withoutDupes2 = [...new Set(dupes)];

console.log(withOutDupes);
// [
//     1,   2, 3,   'a',
//     'f', 4, 'd'
// ]
console.log(withoutDupes2);
// [
//     1,   2, 3,   'a',
//     'f', 4, 'd'
// ]

//Validating parenthesis 
[..."(())()(()())"].reduce((a,i)=> i==='('?a+1:a-1,0);

//Long way with for loop
let status = 0
for(let i in String){
  if(i=="(") status = status+1
  else if(i==")") status = status-1     
  if(status < 0) return False
}

// Group by property 
let obj = [
    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
    {name: 'Bob', job: 'Pilot', country: 'US'},
    {name: 'Lewis', job: 'Pilot', country: 'US'},
    {name: 'Karen', job: 'Software Eng', country: 'CA'},
    {name: 'Jona', job: 'Painter', country: 'CA'},
    {name: 'Jeremy', job: 'Artist', country: 'SP'},
  ]
  let name = [];
  let nameConcate  = '';
  let ppl = obj.reduce((group, curP) => {
    // console.log("group",group, "curp",curP.name);
    // let newkey = curP['country']
    // if(!group[newkey]){
    //   group[newkey]=[]
    // }
    // group[newkey].push(curP) 
    // return group
    
    name.push(curP.name);
    nameConcate = nameConcate + curP['name'] + ' ';
    console.log("name",name)
  }, [])
  console.log("name",name)
// name [ 'Alice', 'Bob', 'Lewis', 'Karen', 'Jona', 'Jeremy' ]
  console.log("nameConcate",nameConcate)
//   Alice Bob Lewis Karen Jona Jeremy 


//   Flattened an array of arrays 
let flattened = [[3, 4, 5], [2, 5, 3], [4, 5, 6]].reduce(
    (singleArr, nextArray) => singleArr.concat(nextArray), []) // [ 3, 4, 5, 2, 5,3, 4, 5, 6]
const removeDupFlattened = [...new Set(flattened)]; //[ 3, 4, 5, 2, 6 ]
console.log("flattened",flattened,"sortedFlattened",removeDupFlattened); //Removed duplicates
  
console.log("flat()",[ [3, 4, 5],
    [2, 5, 3],
    [4, 5, 6]
  ].flat()
  );  //[3, 4, 5, 2, 5,3, 4, 5, 6]
  

  //Power only positive numbers 
 let pos =  [-3, 4, 7, 2, 4].reduce((acc, cur) => {
    if (cur> 0) {
      let R = cur**2;
      acc.push(R);
    }
    return acc;
  }, []);
console.log("Power",pos)   //[ 16, 49, 4, 16 ]

// Reverse a string 
const reverseStr = str=>[...str].reduce((a,v)=>v+a)
console.log("reverseStr",reverseStr("Reverse a string"));

// Convert a binary number in a string to a decimal:
const bin2dec = str=>[...str].reduce((a,v)=>+v+a*2,0)
console.log("bin2dec",bin2dec("1001110"));

