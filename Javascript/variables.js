// var - function scoped
// let -block scoped

if(1){
    var age=50
}
console.log(age);

if(1){
    let b=5
    console.log(b);
}

const val={name:'ram'} 
//object properties can be changed even if they are declared using const data type
console.log(val);

val.name='lokesh'

console.log(val);