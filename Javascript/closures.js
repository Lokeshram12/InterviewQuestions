function outer() {
    let outerVar = 'Outer';
    
    function inner() {
      console.log(outerVar);
    }
  
    return inner;
  }
  
  const closureFunc = outer();
  closureFunc(); // Output: Outer
  