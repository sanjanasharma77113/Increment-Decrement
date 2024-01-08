//console.log("hello world!");//

//  let a= 5;
//  let b= 2;
// console.log("a+b =", a+b);

//Unary Operator//
// let a= 5;
//  let b= 2;

//  console.log("a=",a, "& b = ",b);
//  b++; // 6
//  console.log("a=",a); //6

//Compqrsion Operators

// let a = 5; // number
// let b = 5; // string

//onsole.log("5<5", a<b); // true 

// logical operators//
// 

//Conditional statements

// let age = 17  ;
// if (age>= 15) {
//     console.log("you can vote");

// }

// let age = 19;
// if (age>=18) {
//     console.log("vote");

// } else {
//     console.log("not vate")
// }

// let num = 10;

// if (num % 4 ===0) {
//     console.log(num, "is even");
// } else{
//     console.log(num, "is odd")
// }

// for (let count = 0; count <=2000; count++){
//     console.log("Apna sanjana");
// }

//Calculate sum of 1 of 5
// let sum = 0;
// let n=8;
// for(let i =1; i<=n; i++){
//     sum = sum +i; // sum=15
// }
// console.log("sum=",sum);
// comsole.log("loop has ended")

//print 1 to 5
// for ( var i = 1;  i <=5; i++){
// console.log("i=", i);
// }

// console.log(i);

// 

// 


// for (let num =0; num<= 100; num++){
//     if(num % 2==0){
//         //odd number
//         console.log("num=",num);
//     }
// }

// //practice  Q2
// let gameNum = 25;

//  let useNum = prompt("Guess the game number:");
// while(useNum !== gameNum){
//     useNum = prompt("you enterd wrong number. guess again")
// }
// console.log("congratulations, you entered the right number");

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love JS")

// function countVowels(str) {
//     let count = 0;
//     for (const char of str){
//         if(
//             char ==="a" ||
//             char ==="e" ||
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" 

//         ) {
// count++;
//         }
//     }
//     return count;
        
//     }

// let arr = ["sanjana", "ojas", "mylove"];
// arr.forEach ((val, idx) => {
//     console.log(val.toUpperCase(), idx);

// });

// let nums = [30, 52, 39];

// nums.map((val)) => {
//     return val;
// });

// let calcSquare =(num) => {
//     console.log(num*num);
// }

// let arr = [ "Ojas","MyLove", "MyJaanu", "MySweetBaby",];

//  let evenArr =arr.filter((val) => {
//     return val % 2!==0;
// });

// console.log(evenArr);


let arr = [5,6,7,8,9,10];

const output = arr.reduce((prev,curr) => {
    return prev + curr;

});
console.log(output);