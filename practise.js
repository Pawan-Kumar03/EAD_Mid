// // let reference= function(n){
// //     return n*n
// // }

// // console.log( reference(5))

// // arrowFunc=()=>{
// //     console.log("Arrow Func")
// // }
// // arrowFunc()

// //High-> parameter + return Func
// // function HighOrder(a,b,func){
// //     return func(a,b)
// // }
// // function sum(a,b){
// //     console.log(`The sum of ${a} and ${b} is ${a+b}`)
// // }
// // function sub(a,b){
// //     console.log(`The sub of ${a} and ${b} is ${a-b}`)
// // }
// // function mul(a,b){
// //     console.log(`The mul of ${a} and ${b} is ${a*b}`)
// // }
// // HighOrder(2,3,sum)
// // HighOrder(4,3,sub)
// // HighOrder(2,3,mul)

// // Issue
// // function counter(){
// //     let count = 0
// //     console.log(++count)
// // }
// // counter()
// // counter()
// // counter()
// // counter()


// // Closure Func inside func
// // function outer(){
// //     let counter = 0
// //     return function inner(){
// //         console.log(++counter)
// //     }
// // }

// // let count = outer();
// // count()
// // count()
// // count()
// // count()


// // Iterator

// let arr = [1,2,3,4,5]

// // arr.forEach((x,index)=>{
// //     console.log(`${x} at index ${index}`)
// // })

// // let arr1 = arr.map((x)=>{
// //     return x*x
// // })
// // console.log(arr1)

// // let even= arr.filter((x)=>{return x%2==0})
// // console.log(even)

// // let sum = arr.reduce((element,accumalator)=>{
// //     return accumalator+=element
// // },0)
// // console.log(sum)

// // let multiply = arr.reduce((element,accumalator)=>{
// //         return accumalator*=element
// //     },1)
// // console.log(multiply)
    
// // let unsorted = [4,2,1,5,3]
// // let sorted = unsorted.sort((a,b)=>{ //ascending
// //     return a-b; // for descending b-a
// // })
// // console.log(sorted)
// // console.log(arr.every((x)=>{
// //     return x>0
// // }))

// // console.log(arr.findIndex(x=>x==3))
// // let name  = "Pawan"
// // console.log(`My name is ${name}`)

// //destructure
// let obj = {
//     name: "Ali",
//     age: 25,
//     dept: "CS",
//     cgpa: 3.2
// };

// // let { name: n, age: a, dept: d, cgpa: c } = obj;
// // console.log(n); // Output: Ali
// // let arrr = [1, 2, 3, 4, 5];
// // let [a, s, d, f, g] = arrr;

// // console.log(a, s, d, f, g); // Output: 1 2 3 4 5


// // let copy = arr
// // console.log(arr)
// // console.log(copy)
// // arr[0]=11
// // console.log(copy)
// //spread Operator
// // let copy = [...arr]
// // console.log(arr)
// // console.log(copy)
// // arr[0]=11
// // console.log(copy)
// //rest operator
// // let [a, b, ...rest]=[...arr]
// // console.log(a)
// // console.log(b)
// // console.log(rest)

// //defualt
// // function defualtt(name='pawan') {
// //     console.log(`The name is ${name}`)
// // }

// // defualtt("Ali")
// // defualtt()

// // CallBack => pass func as argument to a func

// // function callback(func){
// //     func()
// //     func()
// //     func()
// //     func()
// //     func()

// // }

// //Promise
// // let p = new Promise((resolve, reject)=>{
// //     console.log("In the Promise code")
// //     resolve("Resolved")
// //     reject("Reject")
// // })

// // p.then(x=>{console.log(x)})
// // .catch(e=>console.log(e))


// // function func(){
// //     console.log("I am callback")
// // }
// // callback(func)

// // // Callback Hell
// // function step1(callback) {
// //     // Simulating asynchronous operation
// //     setTimeout(() => {
// //         console.log("Step 1");
// //         callback();
// //     }, 1000);
// // }

// // function step2(callback) {
// //     // Simulating asynchronous operation
// //     setTimeout(() => {
// //         console.log("Step 2");
// //         callback();
// //     }, 1000);
// // }

// // function step3(callback) {
// //     // Simulating asynchronous operation
// //     setTimeout(() => {
// //         console.log("Step 3");
// //         callback();
// //     }, 1000);
// // }

// // // Callback hell scenario
// // // step1(() => {
// // //     step2(() => {
// // //         step3(() => {
// // //             console.log("All steps completed");
// // //         });
// // //     });
// // // });

// // function step1() {
// //     return new Promise((resolve, reject) => {
// //         // Simulating asynchronous operation
// //         setTimeout(() => {
// //             console.log("Step 1");
// //             resolve();
// //         }, 1000);
// //     });
// // }

// // function step2() {
// //     return new Promise((resolve, reject) => {
// //         // Simulating asynchronous operation
// //         setTimeout(() => {
// //             console.log("Step 2");
// //             resolve();
// //         }, 1000);
// //     });
// // }

// // function step3() {
// //     return new Promise((resolve, reject) => {
// //         // Simulating asynchronous operation
// //         setTimeout(() => {
// //             console.log("Step 3");
// //             resolve();
// //         }, 1000);
// //     });
// // }

// // // Using Promises to avoid callback hell
// // step1()
// //     .then(() => step2())
// //     .then(() => step3())
// //     .then(() => {
// //         console.log("All steps completed");
// //     })
// //     .catch((error) => {
// //         console.error("An error occurred:", error);
// //     });



// // let gotoUni = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("goto Uni");
// //     },5000);
// // })
// // let paper=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //     resolve("attempt paper")
// //     },7000)
// // })
// // let  lunch=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("lunch")
// //     },3000)
// // })
// // gotoUni
// //     .then((x)=>{
// //         console.log(x);
// //     return paper;
// //     })
// //     .then((y)=>{
// //         console.log(y);
// //     return lunch;
// //     })
// //     .then((l)=>{
// //         console.log(l);
// //     })
    

// // async
// async function func1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("I waited 2 sec");
//             resolve();
//         }, 2000);
//     });
// }

// async function func2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("I waited 4 sec");
//             resolve();
//         }, 4000);
//     });
// }

// async function asynch() {
//     console.log("Line 1");
//     await func1();
//     console.log("line 2");
//     await func2();
//     console.log("line 3");
// }

// asynch();

