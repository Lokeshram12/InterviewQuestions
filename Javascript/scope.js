/*
Scopes in JavaScript determine the accessibility of variables and 
functions. There are two types: global scope and local scope.
*/

let globalVar = 'Global';

function foo() {
  let localVar = 'Local';
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}

console.log(globalVar); // Accessible
console.log(localVar); // Not accessible, throws ReferenceError
