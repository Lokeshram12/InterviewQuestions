// 1.how to rever each word in the sentence

// use spli,join,reverse and map

// 2.check if object is an array or not

function checkObjectisArray(elem){
    return Array.isArray(elem)
}
console.log(checkObjectisArray([])); //true
console.log(checkObjectisArray({})); //false

// 3. how to make a array empty(dont use pop method and dont reassign it)

var arr=[1,2,3,4,5]
console.log(arr); //[1,2,3,4,5]
arr.length=0
console.log(arr);  //[]

// 4. write a function which will take string as a input and return it in alphabetical order

let s="lokesh"

function alphabeticalOrder(s){
    return s.split("").sort()
}

console.log(alphabeticalOrder("Javascript"));

// frequency of characters in a string

var obj ={'a':2}
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('v'));

