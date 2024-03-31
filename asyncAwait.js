/*
Async/await is a modern approach to asynchronous programming in JavaScript, built on top of promises.
Async functions allow writing asynchronous code in a synchronous-looking manner.

*/

async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  