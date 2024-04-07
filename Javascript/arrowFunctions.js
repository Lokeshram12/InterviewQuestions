function sum(a,b){
    return a+b;
}

console.log(sum(3,5)); //8


let sum2 = (a,b) => a+b  //this is arrow function

console.log(sum2(1,9));  //10

let rand = () => Math.random()

console.log(rand());

// this keyword

class Person{
    constructor(name){
        this.name=name
    }


printNameArrow(){
    setTimeout(()=> {
            console.log(`Arrow: `+this.name)  //lokesh
    },100)
}

printNameFunction(){
    setTimeout(function(){
            console.log(`Function: `+this.name)  //undefined
    },100)
}

}

let person=new Person('lokesh')
person.printNameArrow()
person.printNameFunction()


// Arrow functions at first glance seem useless. 
// They seem to just be another way to create a function, 
// but with more confusing syntax. While it is correct that arrow functions 
// offer a different syntax for creating functions they also fundamentally
// change how a function is scoped which is the primary reason arrow functions are so useful.


// Now we can talk about the real power of arrow functions which is how they handle scoping of the this keyword. 
// In a normal function the this keyword is scoped based on the context of where the function is called. 
// Arrow functions on the other hand scope the this keyword based on where the function 
// is defined which works more like other programming languages.
