//suncronous
console.log(1);
console.log(2);
console.log(3);

//Asyncronous

console.log("start");

setTimeout(() => {
  console.log("asyncronous ");
}, 0);

console.log("after asyncronous");

//1 callback
//  :: callback is a function passed as an argument to another function to execute later  

function myFunction(newFunction) {
  console.log("callback ex");
  newFunction();
}

function secondFunction(){
    console.log("call back function get call")
}
myFunction(secondFunction);

// async await 
// :: this is latest virsion of promises and to get data from data base we use async await

const getData = async () => {
    try {
        const userData = await user.find()
    } catch (error) {
        console.log(error)
    }
}
getData();

//TDZ temporal dead zone
// :: TDZ is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration, leading to a ReferenceError if attempted.

//example of TDZ
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;


//promise
// :: A promise is an object representing the eventual completion or failure of an asynchronous operation.