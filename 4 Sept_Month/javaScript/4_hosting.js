
hoistingExample();
// hoistingExample2();

function hoistingExample() {

  var myVar = 5;
  console.log(myVar); 
}

const hoistingExample2 = () => {
  //   console.log(myVar); // undefined
  var myVar = "hosting example";
  console.log(myVar); // "hosting example"
};
hoistingExample2();
// hoistingExample2();
