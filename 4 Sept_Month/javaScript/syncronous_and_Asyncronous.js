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