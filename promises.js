/*

Promises represent the eventual completion or failure of an asynchronous operation, providing a cleaner alternative to callback-based approaches.
They have states: pending, fulfilled, or rejected.

*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
      // or reject(new Error('Failed to fetch data'));
    }, 1000);
  });
  
  promise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
  