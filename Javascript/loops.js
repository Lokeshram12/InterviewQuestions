var arr= [1,2,3,4,5,6,7]
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum);

sum=0
arr.forEach((i)=>sum+=i)

console.log(sum);

console.log(typeof sum);