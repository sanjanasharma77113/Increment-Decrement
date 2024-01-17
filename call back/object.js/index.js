// console.log("one");
// console.log("two");

//  setTimeout(() => {
//     console.log("hello");
// }, 4000); // timeout

//  console.log("three");
//  console.log("four");


// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 2000)// timeout;

function asyncFunc() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data1");
            resolve("success")
        }, 4000);
    });

    
    
}

console.log("fetching data1....");
let p1 = asyncFunc();
p1.then((res)=> {
    console.log(res);
});

"sanjana"
"cuttipee"
"freedom"
"prachi"
"Rathi"
  


   







