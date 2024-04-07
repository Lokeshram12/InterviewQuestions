// cookies vs local storage vs session storage

localStorage.setItem('name','lokesh')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

sessionStorage.setItem('name','ram')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

//both session and local storage are like JSON key-value pairs


document.cookie='name=rohit; expires=' +new Date(2024,0,1).toUTCString()


document.cookie='lastname=sharma; expires=' +new Date(2024,0,1).toUTCString()

console.log(document.cookie);