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

// 4.