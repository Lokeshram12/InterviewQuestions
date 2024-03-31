function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add3 = add(3);
  console.log(add3(5)); // Output: 8
  