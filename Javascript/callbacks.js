/*

Callbacks are functions passed
as arguments to other functions to be executed later.

*/

function fetchData(callback) {
    // Assume fetching data from an API
    setTimeout(() => {
      callback({ data: 'Some data' });
    }, 1000);
  }
  
  fetchData((result) => {
    console.log(result);
  });
  