// let n , i = 0

// while(i<=10){
//   n = 5*i;
//     console.log(n)
//     i++;

// }

// console.log(a);

// let n = 0
// for(i=0;i<=10;i++){
//     n=i*5;
//     console.log(n)
// }

// let n,i = 0;
// do {
//   n = 5*i;
//   console.log(n)
//   i++

// }

// while(i<=10)

// let arr = [12,35,1,10,34,1,35],
// n = arr.length;

//  let highest = -1;
//   let secondhighest = -1;

// for(let i = 0; i < n; i++ ){
//   highest = Math.max(highest, arr[i]);
// // console.log(highest)
// }

// for(let i = 0; i < n; i++ ){
// if(arr[i] < highest)
//   {
//   secondhighest = Math.max(secondhighest, arr[i]);
//   }
// }

// console.log(highest, secondhighest);
// let arr = [12,35,1,10,34,1,35],
// m = arr.length;
// for(let i=0;i<m;i++){
//     highest = Math.max(highest, arr[i])
// }

// for(let i=0;i<m;i++){
//     if(arr[i]<highest){
//         secondhighest = Math.max(secondhighest,arr[i])
//     }
// }

// console.log(highest,secondhighest);




// function findSecondLargestElem(arr){
//     let first = -1 , second = -1;

//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         }
//         else if( arr[i] > second && arr[i] != first){
//             second = arr[i];
//         }
//     }
//     console.log(second);
// }
// let arr = [12, 35, 1, 10, 34, 1]
// findSecondLargestElem(arr);

// let a = 10;
// let b = 12;

// [a,b] = [b,a];

// console.log(`the value of a is ${a} and the value of b is ${b}.`);

// function ReverseString(str){
//     var splitstringintoarr = str.split("");
//     console.log(splitstringintoarr)
//     var reversearrintoarr = splitstringintoarr.reverse();
//     console.log(reversearrintoarr)
//     var joinarrintostring = reversearrintoarr.join("");
//     console.log(joinarrintostring)

//     return  joinarrintostring;
// }

// ReverseString('Priya Vinit Nair')

// var a = [5];
// count = 5;
// var missing = new Array()
// for(i=1;i<=count;i++){
//     if(a.indexOf(i)==-1){
//         missing.push(i)
//         missing.sort()
//     }
// }
//     console.log(missing);

//     function palindrome(str){
//         var splitstringintoarr = str.split("");
//         //  console.log(splitstringintoarr)
//          var reversearrintoarr = splitstringintoarr.reverse();
//         // console.log(reversearrintoarr)
//         var joinarrintostring = reversearrintoarr.join("");
//         // console.log(joinarrintostring)

//         if(str == joinarrintostring){
//             console.log('its a palindrome');

//         }else{
//             console.log('its not a palindrome');
//         }

//     }

//     palindrome('pop')

//0 + 1 + 1 + 2 + 3 + 5.....
// fibonacci(3) = fib(2)+fib(1) = 1+1 =2;
// fibonacci(3) = fib(2)+fib(1) = 1+1 =2;
// fibonacci(4) = fib(3)+fib(2) = 2+1 = 3;
// fibonacci(5) = fib(4)+fib(3)= 3 +2 = 5;

// function fibonacci(n) {
//     if (n < 3) return 1;

//          return fibonacci(n-1) + fibonacci(n-2);

// }

// console.log(fibonacci(5));

//  function fibonacci(n) {


//     let prev = 0;
//     let curr = 1;
//     let next;
//     //  i = 5
//     for ( let i=0; i<n; i++ ){
//         next = prev + curr;
//         prev = curr;
//         curr = next;
//     }
//     console.log(curr)
//     return prev;
    
// }

// fibonacci(7)


// function getEvenNumbers(){
//   var arr = [1,2,3,4,5,6,7,8,9]
//   for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
//   }

// }
// getEvenNumbers();

// function getEvenNumbers(num){

//       if(num % 2 === 0)
//       {
//           console.log(num)
//       }
//     }

//   var arr = [1,2,3,4,5,6,7,8,9]
//   arr.forEach(getEvenNumbers);

// function isPrime(n){
//     // 0 and 1 in not a prime number
//     if(n==1||n==0) return false;
//     // run a loop from 2 to n-1
//     for(var i=2;i<n;i++){
//         // divisible by i not a prime number
//         if(n%i==0) return false;
//     }
//     // prime number
//     return true;
// }

// var N = 100;

// // check for every number from 1 to N
//   for(var i = 1; i <= N; i++)
//   {
//       // check if current number is prime
//       if(isPrime(i)) {
//         console.log( i );
//       }
// }

// function isPrime(n){
//    if(n==1||n==0){
//    return false;
//    }
//    {
//    for(let i=2;i<=100;i++){
//     if(n%i==0) return false

//     return true;

//    }

//    }
//    console.log(i);
// }
// isPrime();

// Javascript implementation to find the
// square root of the number N
// without using sqrt() function

// Function to find the square
// root of the number N using BS

// function sqrtSearch(low, high, N) {
//   // If the range is still valid
//     // console.log("params",low, high, N )
//   if (low <= high) {
//     // Find the mid-value of the range
//     var mid = parseFloat((low + high) / 2);
//     // console.log(mid)
//     // Base Case
//     if (mid * mid <= N && (mid + 1) * (mid + 1) > N) {
//         // console.log("mid",mid)
//       return mid;
//     }

//     // Condition to check if the
//     // left search space is useless
//     else if (mid * mid < N) {
//         // console.log('in')
//        sqrtSearch(mid + 1, high, N);
//     } else {
//        sqrtSearch(low, mid - 1, N);
//     }
//   }
// }

// // Driver Code
// var N = 10;

// console.log(sqrtSearch(2, 5, N));

// document.write(sqrtSearch(0, N, N));

// This code is contributed by todaysgaurav

// const arr = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arr);
// console.log(duplicateElements);

// function toFindDuplicates() {
//     let arr = [1, 2, 1, 3, 4, 3, 5];
//     let toMap = {};
//     let resultToReturn = false;
//     for (let i = 0; i < arr.length; i++) {

//         if (toMap[arr[i]]) {
//             resultToReturn = true;
//             // terminate the loop
//             break;
//         }

//         toMap[arr[i]] = true;
//     }

//     if (resultToReturn) {

//         console.log('Duplicate elements exist');
//         }
//         else {
//             console.log('Duplicates dont exist');
//             }
//         }

//         toFindDuplicates();

// function toFindDuplicates() {
//     let arry = [1, 2, 1, 3, 4, 3, 5];
//     let resultToReturn = false;
//     for (let i = 0; i < arry.length; i++) { // nested for loop
//         for (let j = 0; j < arry.length; j++) {
//             // prevents the element from comparing with itself
//             if (i !== j) {
//                 // check if elements' values are equal
//                 if (arry[i] === arry[j]) {
//                     // duplicate element present
//                     resultToReturn = true;
//                     // terminate inner loop
//                     break;
//                 }
//             }
//         }
//         // terminate outer loop
//         if (resultToReturn) {
//             break;
//         }
//     }
//     if(resultToReturn) {
//             console.log('Duplicate elements exist');
//             }
//             else {
//                 console.log('Duplicates dont exist ');
//                 }
//             }

//             toFindDuplicates();

//  let twoSum = (array, sum) => {
//     let hashMap = {},
//       results = []

//         for (let i = 0; i < array.length; i++){
//             if (hashMap[array[i]]){
//                 results.push([hashMap[array[i]], array[i]]) //index
//             }else{
//                 hashMap[sum - array[i]] = array[i];
//             }
//           }
//           return results;
//     }
// console.log(twoSum([10,20,40,50,60,70,30],50));


// let arr = [1, 2, 1, 3, 4, 3, 5];
// let toFindDuplicates = arr.filter((item, index) => arr.indexOf(item))

// console.log(toFindDuplicates);

// function palindrome(str){
//     var a = str.split('');
//     var b = a.reverse();
//     var c = b.join('');

//     if(str === c){
//         console.log('it is palindrome')
//     }else{
//         console.log('it is not a palindrome')
//     }
// }

// palindrome(str='mom');

// function reverseNumber(number) {
//     var revNumber = 0;
//     while (number > 0) {
//       revNumber = (revNumber * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return revNumber;
//   }
//   console.log(reverseNumber(786));

// let n,i = 0;
// while(i<=10){
//     n = 231*i;
//     console.log(n);
//     i++
// }


// for(i=0;i<=10;i++){
//     n=10*i;
//     console.log(n)
// }



// var a = [5];
// count = 5;
// var missing = new Array();
// for(i=0;i<=count;i++){
//     if(a.indexOf(i)==-1){
//         missing.push(i);
//         missing.sort();
//     }
// }
// console.log(missing)

const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
const sortWithReduce = arr => {
   return arr.reduce((acc, val) => {
      let ind = 0;
      while(ind < arr.length && val < arr[ind]){
         ind++;
      }
      acc.splice(ind, 0, val);
      return acc;
   }, []);
};
console.log(sortWithReduce(arr));

